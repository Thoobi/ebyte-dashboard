import { BsCalendar2Date } from "react-icons/bs";
import { useUserStore, UserStore } from "@/store/userStore";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";

export default function WelcomeUser() {
  const { fetchUserDetails, user, setIsSidebarOpen, sidebarOpen } =
    useUserStore() as UserStore;

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  const date = new Date();
  return (
    <div className="w-full py-10 max-md:py-5">
      <div className="flex flex-col gap-3 max-md:gap-2">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold max-md:text-xl">
            Hello, {user?.firstName}
          </h1>
          <span className="flex flex-row gap-2 items-center">
            <p className="text-[13px] max-md:hidden">{date.toDateString()}</p>
            {sidebarOpen ? (
              <IoCloseOutline
                className="text-xl lg:hidden cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              />
            ) : (
              <RxHamburgerMenu
                className="text-lg lg:hidden cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              />
            )}

            <span className="p-2 rounded-full bg-gray-100 max-md:hidden">
              <BsCalendar2Date className="text-sm " />
            </span>
          </span>
        </div>
        <p className="text-sm text-gray-400 font-light max-md:text-xs">
          Track team progress here. You almost reach a goal.
        </p>
      </div>
    </div>
  );
}
