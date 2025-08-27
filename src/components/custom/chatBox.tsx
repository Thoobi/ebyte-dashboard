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
    if (message.trim().length === 0) return;
    await postChatMessage(message);
    setChatMessage("");
  };

  return (
    <section className="relative p-5 w-full flex flex-col gap-5 min-h-[500px]">
      <div className="max-h-[370px] overflow-scroll">
        {chatData.length > 0 ? (
          chatData.map((chat: Chat, id) => (
            <div key={id} className="my-3 flex items-end justify-end">
              <span className="bg-blue-100 text-xs py-2.5 px-2 rounded-tr-2xl rounded-4xl break-words max-w-[250px] text-right">
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
        <div className="flex flex-row items-center justify-between py-2 px-3 mb-3 bg-gray-200 w-[90%] mx-auto rounded-lg">
          <IoIosAttach className="text-xl rotate-25" />
          <textarea
            placeholder="write a message"
            value={chatMessage || ""}
            onChange={(e) => {
              setChatMessage(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendChat(chatMessage);
            }}
            className="outline-none text-sm w-full px-2 resize-none"
          />
          <span className="flex flex-row gap-2 items-center">
            {chatMessage.length > 0 ? (
              <button
                className="bg-blue-400 border-1 cursor-pointer border-blue-500 p-1 rounded-full flex justify-start items-start group"
                onClick={() => handleSendChat(chatMessage)}
              >
                <CiLocationArrow1 className="text-lg text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-500 ease-out text-start" />
              </button>
            ) : (
              <div className="flex flex-row gap-2 items-center p-1">
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
