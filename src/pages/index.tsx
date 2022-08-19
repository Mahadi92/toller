import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <header className="relative w-full rounded-md overflow-hidden bg-black/30 h-72 lg:h-96">
        <Image
          src="/static/images/homeHero.jpg"
          layout="fill"
          // width="100%"
          // height="100%"
          objectFit="cover"
          alt=""
        />
        <div className="hero-content absolute top-0 left-0 w-full h-full flex justify-start items-center">
          <div className="h-full rounded-lg p-10">
            <div className="pb-6">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-100 leading-snug">
                Make life Easy with{" "}
                <span className="font-kaushan text-blue-400 text-2xl sm:text-4xl lg:text-6xl rounded-md">
                  Toller
                </span>
              </h1>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl text-gray-100 py-4 leading-snug">
                Buy toll and get ticket.
              </h1>
            </div>
            <Link href="/buy/ticket">
              <a className="text-white px-10 py-4 text-lg rounded-lg bg-blue-400 hover:bg-blue-500">
                Buy Ticket
              </a>
            </Link>
          </div>
        </div>
      </header>
    </DefaultLayout>
  );
};

export default Home;
