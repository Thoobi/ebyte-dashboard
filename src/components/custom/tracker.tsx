import { AiOutlineLike } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import { BiLineChart } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { useUserStore, UserStore } from "@/store/userStore";
import { useEffect } from "react";

const handleIconPosition = (data: TaskProgressItem) => {
  const hour = Number(data.count);
  const task = Number(data.count);
  const efficiency = Number(data.count);

  if (hour < 0 || task < 0 || efficiency < 0) return "rotate-180 text-red-400";
  return "rotate-0 text-green-500";
};

const handleTextColor = (data: TaskProgressItem) => {
  const hour = Number(data.count);
  const task = Number(data.count);
  const efficiency = Number(data.count);

  if (hour < 0 || task < 0 || efficiency < 0) return "text-red-400 text-xs";
  return "text-green-500 text-xs";
};

type TaskProgressItem = {
  label: string;
  value: number | string;
  count: number;
  tasks: { id: string; title: string }[];
};

const defaultItems: TaskProgressItem[] = [
  { label: "Finished", value: 0, count: 0, tasks: [] },
  { label: "Tracked", value: 0, count: 0, tasks: [] },
  { label: "Efficiency", value: 0, count: 0, tasks: [] },
];

export default function Tracker() {
  const { fetchTaskProgress, taskProgress } = useUserStore() as UserStore;
  useEffect(() => {
    fetchTaskProgress();
  }, [fetchTaskProgress]);

  const data = [0, 1, 2].map((i) => ({
    label: taskProgress?.[i]?.label || defaultItems[i].label,
    value: taskProgress?.[i]?.value || defaultItems[i].value,
    count: taskProgress?.[i]?.count || defaultItems[i].count,
    tasks: taskProgress?.[i]?.tasks || defaultItems[i].tasks,
    icon: [AiOutlineLike, RxLapTimer, BiLineChart][i],
  }));

  return (
    <div className="border-y max-md:bg-gray-50/50 max-md:border-none max-md:p-2 max-md:rounded-lg py-5">
      <div className="flex flex-row max-md:grid max-md:grid-cols-2 max-md:gap-3 justify-between">
        {data?.map((data, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 max-md:gap-1.5 nth-[2]:border-x max-md:nth-[2]:border-x-0 nth-[2]:px-8 max-md:nth-[2]:p-2 max-md:rounded-lg max-md:bg-white max-md:p-2"
          >
            <span className="bg-gray-50 p-2 rounded-full">
              <data.icon className="text-2xl max-md:text-lg text-gray-500" />
            </span>
            <div className="flex flex-col gap-2 max-md:gap-1 items-start justify-center">
              <span className="text-sm font-normal max-md:text-xs">
                {data.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold max-md:text-sm">
                  {data.value}
                </span>
                <div className="flex items-center gap-1 max-md:gap-0.5">
                  <FaCaretDown
                    className={`text-sm max-md:text-xs ${handleIconPosition(
                      data
                    )}`}
                  />
                  <span
                    className={`text-sm max-md:text-xs max-md:font-normal font-semibold ${handleTextColor(
                      data
                    )}`}
                  >
                    {data.count}
                    {data.label === "Finished" && " tasks"}
                    {data.label === "Tracked" && " hours"}
                    {data.label === "Efficiency" && " %"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
