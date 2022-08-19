import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

interface PropType {
  children?: JSX.Element | JSX.Element[];
}

const AuthLayout: React.FC<PropType> = ({ children }) => {
  return (
    <main
      className="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 justify-items-center"
      style={{ minWidth: "380px" }}
    >
      {/* ----------------- Left section ----------------- */}
      <section className="md:col-span-2 lg:col-span-1 w-full max-w-6xl px-10 xs:px-14 sm:px-20 2xl:px-32 py-10">
        <div className="w-full flex justify-center pb-10">
          <h1 className="font-kaushan text-4xl text-blue-900">Toller</h1>
        </div>
        {children}

        <div className="flex justify-end pt-16">
          <Link href="/">
            <a className="flex justify-center item-center border-2 border-primary text-gray-600 hover:text-white hover:bg-primary px-6 py-2 rounded-md">
              <BsArrowLeftShort size={26} />
              <span>Back to Home</span>
            </a>
          </Link>
        </div>

        <p className="block md:hidden tracking-wider text-center pt-14">
          © 2022 Toller. All rights reserved.
        </p>
      </section>

      {/* ----------------- Right section ----------------- */}
      <section className="hidden md:block w-full h-full relative">
        <Image
          src="/static/images/auth-img.png"
          layout="fill"
          // width="100%"
          // height="100%"
          objectFit="cover"
          alt="login"
        />
        <p className="absolute w-full text-center text-white tracking-wider bottom-5">
          © 2022 Toller. All rights reserved.
        </p>
      </section>
    </main>
  );
};

export default AuthLayout;
