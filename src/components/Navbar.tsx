import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="wrapper py-10 flex justify-between items-center">
      <Link href="/" passHref>
        <a className="font-kaushan text-4xl text-blue-900">Toller</a>
      </Link>
      <div className="rounded-full-img">
        <Image src="/static/images/profile.jpg" width={40} height={40} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
