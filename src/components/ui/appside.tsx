import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { PiCirclesThreeBold } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { GoTasklist, GoHome } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const data = [
  {
    label: "Help & Information",
    icon: IoIosInformationCircleOutline,
  },
  {
    label: "Log out",
    icon: AiOutlineMinusCircle,
  },
];

const sideLinks = [
  {
    label: "Home",
    path: "/",
    add: GoHome,
  },
  {
    label: "Projects",
    path: "/project",
    add: CiGrid41,
    plus: FiPlus,
  },
  {
    label: "Tasks",
    path: "/tasks",
    add: GoTasklist,
    plus: FiPlus,
  },
  {
    label: "Team",
    path: "/team",
    add: PiCirclesThreeBold,
  },
  {
    label: "Settings",
    path: "/settings",
    add: LuSettings,
  },
];

export default function AppSidebar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  return (
    <div className="flex flex-col gap-20 pt-14 pb-10 px-8 w-[450px] min-h-full relative">
      <div>Logo</div>
      <ul className="flex flex-col gap-4 justify-center">
        {sideLinks.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={`flex items-center gap-2 py-1 ${
                activePath === item.path
                  ? "text-gray-800 font-semibold"
                  : "text-gray-400"
              }`}
              onClick={() => setActivePath(item.path)}
            >
              <span className="text-base">
                <item.add className="text-lg" />
              </span>
              <div className={`flex justify-between w-full`}>
                <span className="text-sm">{item.label}</span>
                {item.plus && (
                  <span className="bg-gray-50 p-1 rounded-full">
                    <item.plus className="h-3 w-3 text-black/90" />
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="bg-gradient-to-b from-gray-200 to-gray-50 px-4 py-5 flex flex-col gap-3 rounded-2xl items-center mb-10">
        <h3 className="text-gray-800 text-base font-semibold">
          Upgrade to Pro
        </h3>
        <p className="text-center text-gray-500 text-sm font-normal">
          Get 1 month free and unlock
        </p>
        <button className="bg-blue-200 border-2 border-blue-100 py-2.5 px-6 rounded-full text-black font-normal text-sm hover:cursor-pointer">
          Upgrade
        </button>
      </div>

      <ul className="flex flex-col gap-4 justify-center absolute bottom-10">
        {data.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 py-1 text-gray-400"
          >
            <span className="text-base">
              <item.icon className="text-lg" />
            </span>
            <span className="text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
