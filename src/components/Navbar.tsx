import { Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const ProfileMenu = () => {
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <Menu className="rounded-lg">
      <div>
        <div className="profile-dropdown-action-grp">
          <Link href="/dashboard" passHref>
            <a>
              <MdSpaceDashboard className="text-slate-500" />
              <span className="text-slate-600">Dashboard</span>
            </a>
          </Link>
          <button className="border-t rounded-b-lg" onClick={handleLogout}>
            <FiLogOut />
            <span className="text-slate-600">Log out</span>
          </button>
        </div>
      </div>
    </Menu>
  );
};

const Navbar = () => {
  return (
    <div className="wrapper py-10 flex justify-between items-center">
      <Link href="/" passHref>
        <a className="font-kaushan text-4xl text-blue-900">Toller</a>
      </Link>
      <div className="rounded-full-img">
        <Dropdown overlay={ProfileMenu} trigger={["click"]}>
          <Image
            src="/static/images/profile.jpg"
            width={40}
            height={40}
            alt=""
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
