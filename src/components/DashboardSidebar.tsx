import Link from "next/link";
import { useRouter } from "next/router";
import { FaTicketAlt, FaUser, FaUsers } from "react-icons/fa";
import { HiTicket } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";

interface PropType {
  isOpen: boolean;
}

const sidebarData = [
  {
    link: "/dashboard/profile",
    text: "Profile",
    icon: <FaUser size="22px" />,
  },
  {
    link: "/dashboard/ticket",
    text: "Ticket",
    icon: <HiTicket size="22px" />,
  },
];

const adminSidebarData = [
  {
    link: "/dashboard/toll",
    text: "Vehicle's Toll",
    icon: <AiFillCar size="22px" />,
  },
  {
    link: "/dashboard/users",
    text: "All Users",
    icon: <FaUsers size="22px" />,
  },
  {
    link: "/dashboard/tickets",
    text: "All Tickets",
    icon: <FaTicketAlt size="22px" />,
  },
];

const DashboardSidebar: React.FC<PropType> = ({ isOpen }) => {
  const router = useRouter();

  return (
    <div
      className={`sticky top-0 transform duration-300 z-10`}
      style={{
        width: !isOpen ? 80 : "100%",
      }}
    >
      <div className="w-full h-full">
        <ul className="dashboard-sidebar-items">
          {sidebarData.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.link}>
                  <a
                    className={`${
                      router.pathname === item.link
                        ? "dashboard-sidebar-item-active"
                        : "text-slate-600"
                    }`}
                  >
                    {item.icon}
                    <span className={`${!isOpen && "hidden"} text-sm`}>
                      {item.text}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}

          {true && (
            <h3 className="text-base text-gray-500 pl-6 pt-5">
              {isOpen ? "Admin" : "---"}
            </h3>
          )}

          {true &&
            adminSidebarData.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.link}>
                    <a
                      className={`${
                        router.pathname === item.link
                          ? "dashboard-sidebar-item-active"
                          : "text-slate-600"
                      }`}
                    >
                      {item.icon}
                      <span className={`${!isOpen && "hidden"} text-sm`}>
                        {item.text}
                      </span>
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
