import { BsCalendar2Date } from "react-icons/bs";
import { useUserStore, UserStore } from "@/store/userStore";
import { useEffect } from "react";

export default function WelcomeUser() {
  const { fetchUserDetails, user } = useUserStore() as UserStore;

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  const date = new Date();
  return (
    <div className="w-full py-10">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold">Hello, {user?.firstName}</h1>
          <span className="flex flex-row gap-2 items-center">
            <p className="text-[13px]">{date.toDateString()}</p>
            <span className="p-2 rounded-full bg-gray-100">
              <BsCalendar2Date className="text-sm " />
            </span>
          </span>
        </div>
        <p className="text-sm text-gray-400 font-light">
          Track team progress here. You almost reach a goal!
        </p>
      </div>
    </div>
  );
}
