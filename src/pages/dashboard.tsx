import WelcomeUser from "@/components/custom/welcome_user";
import Tracker from "@/components/custom/tracker";
import CurrentTask from "@/components/custom/currentTask";
import Performance from "@/components/custom/performance";

export default function Dashboard() {
  return (
    <section className="w-full h-full">
      <WelcomeUser />
      <Tracker />
      <Performance />
      <CurrentTask />
    </section>
  );
}
