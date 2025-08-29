import ChatProfileCard from "../custom/chatProfileCard";
import ChatBox from "../custom/chatBox";

export default function ChatBar() {
  return (
    <section className="min-w-[350px] h-screen p-4 max-md:hidden">
      <ChatProfileCard />
      <div className="flex flex-row items-center gap-4 py-4">
        <span className="h-[1px] w-full bg-gray-200"></span>
        <span className="text-gray-800">Activity</span>
        <span className="h-[1px] w-full bg-gray-200"></span>
      </div>
      <ChatBox />
    </section>
  );
}
