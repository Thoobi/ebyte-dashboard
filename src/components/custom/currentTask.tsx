import { BsChevronDown } from "react-icons/bs";
import { useUserStore, UserStore } from "@/store/userStore";
import { BsThreeDots } from "react-icons/bs";
import { useEffect } from "react";
import { MdDraw, MdLock, MdDescription, MdBuild } from "react-icons/md";

type IconName = "MdDraw" | "MdLock" | "MdDescription" | "MdBuild";

export default function CurrentTask() {
  const { fetchAllTask, tasks } = useUserStore() as UserStore;

  const Iconmap: Record<IconName, React.ElementType> = {
    MdDraw,
    MdLock,
    MdDescription,
    MdBuild,
  };

  useEffect(() => {
    fetchAllTask();
  }, [fetchAllTask]);

  const iconBgColor = [
    "bg-blue-50",
    "bg-red-50",
    "bg-green-50",
    "bg-yellow-50",
  ];

  const getIconBgColor = (iconName: string) => {
    const index = Object.keys(Iconmap).indexOf(iconName);
    return iconBgColor[index] || "";
  };

  const handleIconMap = (iconName: string) => {
    const Icon = Iconmap[iconName as IconName];
    return Icon ? <Icon className="text-gray-600 text-lg" /> : null;
  };

  return (
    <section className="py-10">
      <div className="flex flex-row justify-between items-center w-full py-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold">Current Tasks</h2>
          <span className="h-4 border-r mx-5"></span>
          <span className="text-sm font-medium">Done 30%</span>
        </div>
        <button className="flex items-center rounded-full border py-1.5 px-3 gap-2.5 text-sm cursor-pointer">
          Week <BsChevronDown />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="py-2 flex flex-row items-center gap-4 text-sm"
            >
              <span
                className={`p-3 rounded-full text-2xl ${getIconBgColor(
                  task.icon
                )}`}
              >
                {handleIconMap(task.icon)}
              </span>
              <span className="w-full">
                <h3 className="text-sm font-medium ">{task.title}</h3>
              </span>
              <span className="flex items-center justify-start w-[200px]">
                <p className="text-sm text-gray-500">{task.status}</p>
              </span>
              <span className="w-1/3 flex justify-center items-center">
                <p className="text-sm text-gray-500 ">{task.hours}</p>
              </span>
              <span className="w-1/8 flex items-center justify-center">
                <BsThreeDots />
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No current tasks</p>
        )}
      </div>
    </section>
  );
}
