import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/ui/appside";
import ChatBar from "@/components/ui/chatbar";

export default function DashLayout() {
  return (
    <main className="flex h-screen w-full">
      <AppSidebar />
      <section className="w-full px-14 border-x-2 border-x-gray-200 h-screen">
        <Outlet />
      </section>
      <ChatBar />
    </main>
  );
}
