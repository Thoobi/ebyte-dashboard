import { IoIosArrowDown } from "react-icons/io";
import Chart from "@/components/ui/chart";
export default function Performance() {
  const day = new Date();
  const date = {
    day: day.toLocaleDateString("en-US", { day: "2-digit" }),
    month: day.toLocaleDateString("en-US", { month: "2-digit" }),
    monthChar: day.toLocaleDateString("en-US", { month: "long" }),
  };
  return (
    <section className="w-full pt-8 pb-5 flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-lg font-semibold">Performance</h2>
        <button className="py-1 px-2 border rounded-full text-xs text-gray-500 hover:cursor-pointer flex items-center gap-1">
          <span>
            {date.day}-{date.month}
          </span>{" "}
          <span className="flex items-center gap-1">
            {date.monthChar}
            <IoIosArrowDown className="text-xs" />
          </span>
        </button>
      </div>
      <Chart />
    </section>
  );
}
