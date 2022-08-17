import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <header className="relative w-full rounded-md overflow-hidden bg-black/30 h-96">
        <Image
          src="/static/images/homeHero.jpg"
          layout="fill"
          // width="100%"
          // height="100%"
          objectFit="cover"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="glassDesign px-20 py-12 rounded-lg text-center font-semibold">
            <h1 className="text-4xl md:text-6xl text-gray-700 leading-snug">
              Make life Easy with{" "}
              <span className="font-kaushan text-4xl md:text-6xl bg-yellow-50 px-4 rounded-md">
                Toller
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl text-gray-700 py-4">
              Buy toll and get ticket.
            </h1>
          </div>
        </div>
      </header>
    </DefaultLayout>
  );
};

export default Home;
