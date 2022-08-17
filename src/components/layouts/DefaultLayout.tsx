import React from "react";
import Navbar from "@/components/Navbar";

interface PropType {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout: React.FC<PropType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="wrapper">{children}</main>
    </>
  );
};

export default DefaultLayout;
