import { IoIosAttach } from "react-icons/io";
import { GoSmiley } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { useUserStore, UserStore } from "@/store/userStore";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect } from "react";

interface Chat {
  id: string;
  message: string;
  timestamp: number;
}

export default function ChatBox() {
  const {
    setChatMessage,
    chatMessage,
    postChatMessage,
    fetchAllChats,
    chatData,
  } = useUserStore() as UserStore;

  useEffect(() => {
    console.log(chatMessage);
  }, [chatMessage]);

  useEffect(() => {
    fetchAllChats();
    const interval = setInterval(() => {
      fetchAllChats();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchAllChats]);

  const handleSendChat = async (message: string) => {
    await postChatMessage(message);
    setChatMessage("");
  };
  return (
    <section className="relative p-5 w-full">
      <div className="h-[450px] overflow-scroll">
        {chatData.length > 0 ? (
          chatData.map((chat: Chat, id) => (
            <div key={id} className="my-3 flex items-end justify-end">
              <span className="bg-gray-200 text-xs p-2 rounded-br-3xl rounded-full">
                {chat.message}
              </span>
            </div>
          ))
        ) : (
          <span className="flex h-full justify-center items-center ">
            No chat history
          </span>
        )}
      </div>
      <div className=" absolute bottom-0 left-0 w-full">
        <div className="flex flex-row items-center justify-between py-3 px-3 mb-3 bg-gray-200 w-[90%] mx-auto rounded-lg">
          <IoIosAttach className="text-xl rotate-25" />
          <input
            type="text"
            placeholder="write a message"
            value={chatMessage || ""}
            onChange={(e) => {
              setChatMessage(e.target.value);
            }}
            className="outline-none text-sm w-full px-3"
          />
          <span className="flex flex-row gap-2 items-center">
            {chatMessage.length > 0 ? (
              <button
                className="bg-blue-400 border-1 cursor-pointer border-blue-500 p-1 rounded-full flex justify-start items-start group"
                onClick={handleSendChat.bind(null, chatMessage)}
              >
                <CiLocationArrow1 className="text-lg text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-500 ease-out text-start" />
              </button>
            ) : (
              <div className="flex flex-row gap-3 items-center p-1">
                <GoSmiley className="text-lg" />
                <IoMicOutline className="text-xl" />
              </div>
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
