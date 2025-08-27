import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useUserStore, UserStore } from "@/store/userStore";
export default function ChatProfileCard() {
  const { user } = useUserStore() as UserStore;
  return (
    <div className="bg-gray-100 py-5 rounded-3xl">
      <div className="py-5 w-full flex flex-col items-center gap-3">
        <div className="bg-gray-400 rounded-full h-22 w-22"></div>
        <span className="flex flex-col items-center text-center gap-2">
          <h3 className="text-base font-medium">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </span>
      </div>
      <div className="flex gap-6 px-5 pb-4 justify-center items-center">
        <span className="p-2 bg-white rounded-full shadow-md cursor-pointer">
          <IoCallOutline className="text-gray-900" />
        </span>
        <span className="p-2 bg-white rounded-full shadow-md cursor-pointer">
          <IoVideocamOutline className="text-gray-900" />
        </span>
        <span className="p-2 bg-white rounded-full shadow-md cursor-pointer">
          <BsThreeDotsVertical className="text-gray-900" />
        </span>
      </div>
    </div>
  );
}
