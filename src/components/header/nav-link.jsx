import { Link, useLocation } from "react-router-dom";
import { AiFillTruck } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuWalletCards } from "react-icons/lu";

export default function NavLinks() {
  const location = useLocation();
  const navigationLinks = [
    { name: "Select Skip", path: "/", icon: <AiFillTruck /> },
    {
      name: "Postcode",
      path: "/postcode",
      icon: <CiLocationOn />,
    },
    {
      name: "Wast Type",
      path: "/wast-type",
      icon: <RiDeleteBin6Line />,
    },
    {
      name: "Permit Check",
      path: "/permit-check",
      icon: <MdOutlineSecurity />,
    },
    { name: "Choose Date", path: "/chose-date", icon: <SlCalender /> },
    { name: "Payment", path: "/payment", icon: <LuWalletCards /> },
  ];

  return (
    <div className="flex justify-between mt-5 mx-5">
      {navigationLinks.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center justify-center gap-3 px-6 py-2  cursor-pointer no-underline
            ${isActive ? "border text-white" : "bg-transparent"}
              ${index >= 2 ? "hidden sm:flex" : ""}
           ${index >= 3 ? "hidden md:flex" : ""}
        
          `}
          >
            <div className="text-blue-600 text-2xl ">{item.icon}</div>
            <h3 className="text-white text-base">{item.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}
