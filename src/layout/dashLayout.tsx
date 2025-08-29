import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/ui/appside";
import ChatBar from "@/components/ui/chatbar";
import MobileSidebar from "@/components/ui/mobile_sidebar";
import { useUserStore, UserStore } from "@/store/userStore";

export default function DashLayout() {
  const { sidebarOpen } = useUserStore() as UserStore;
  return (
    <main className="flex h-full w-full">
      <div
        className={`lg:hidden fixed inset-0 z-40 max-md:w-[80px] flex justify-center items-center border-r max-md:bg-white transition-transform duration-500 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <MobileSidebar />
      </div>
      <AppSidebar />
      <section className="w-full px-14 max-md:px-3 border-x-2 max-md:border-x-0 max-md:border-l-1 border-x-gray-200 h-screen">
        <Outlet />
      </section>
      <ChatBar />
    </main>
  );
}
