import React from "react";
import Navbar from "@/components/Navbar";

interface PropType {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout: React.FC<PropType> = ({ children }) => {
  return (
    <div style={{ minWidth: "480px" }}>
      <Navbar />
      <main className="wrapper">{children}</main>
    </div>
  );
};

export default DefaultLayout;
