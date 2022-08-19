// import useWindowSize from "@/hooks/useWindowSize";
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import DashboardSidebar from "../DashboardSidebar";
import Navbar from "../Navbar";

interface PropType {
  children?: JSX.Element | JSX.Element[];
}

const DashboardLayout: React.FC<PropType> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMobile(true);
      setIsOpen(false);
    } else {
      // dispatch(setSidebarOpenState(true));
      setIsMobile(false);
    }
  }, [windowSize.width]);

  return (
    <div style={{ minWidth: "480px" }}>
      <Navbar />
      <main
        className={`${
          isMobile ? "block w-full" : "flex space-x-10 justify-end"
        } relative`}
      >
        {/*--------- Sidebar ------------ */}
        <div
          className={`sidebar bg-slate-50 rounded-r-xl ${
            !isOpen ? "lg:w-20" : "w-60 lg:w-2/12 2xl:w-72"
          } ${
            isMobile && !isOpen
              ? "absolute top-24 left-0 -translate-x-20"
              : "absolute lg:fixed lg:top-24 left-0 h-screen overflow-y-auto overflow-x-visible translate-x-0"
          } pt-8 pb-40 transform duration-300 z-20`}
        >
          <DashboardSidebar isOpen={isOpen} />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            left: !isOpen
              ? "0.9rem"
              : windowSize.width > 1536
              ? "13rem"
              : windowSize.width >= 1024
              ? "11.5%"
              : "13.5%",
          }}
          className={`${
            isOpen ? "w-6 h-6" : "w-6 h-6"
          } fixed top-24 lg:top-32 rounded-md border bg-white text-font-gray flex justify-center items-center transition ease-in-out duration-300 z-20`}
        >
          {!isOpen ? (
            <MdOutlineKeyboardArrowRight />
          ) : (
            <MdOutlineKeyboardArrowLeft />
          )}
        </button>

        <div
          className={`${
            isMobile ? "w-full" : !isOpen ? "w-11/12" : "w-10/12"
          } transform duration-300`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
