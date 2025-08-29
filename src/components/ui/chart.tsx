import Charts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useUserStore, UserStore } from "@/store/userStore";
import { useEffect } from "react";

interface ChartData {
  series: ApexOptions["series"];
  options: ApexOptions;
}

export default function Chart() {
  const { chartData, getChartData } = useUserStore() as UserStore;

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  const data: ChartData = {
    series: [
      {
        name: "Last Month",
        data: chartData[1]["last-month"],
      },
      {
        name: "This Month",
        data: chartData[0]["this-month"],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["01", "02", "03", "04", "05", "06", "07", "08"],
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <Charts
      options={data.options}
      series={data.series}
      type="line"
      height={280}
    />
  );
}
