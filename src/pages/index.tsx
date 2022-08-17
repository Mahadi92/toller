import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <header className="relative w-full rounded-md overflow-hidden bg-black/30">
        <Image
          src="/static/images/homeHero.jpg"
          layout="responsive"
          width="100%"
          height="25"
          objectFit="cover"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="glassDesign p-20 rounded-lg">
            <h1 className="text-5xl text-gray-700">
              Make life Easy with{" "}
              <span className="font-kaushan text-5xl">Toller</span>
            </h1>
          </div>
        </div>
      </header>
    </DefaultLayout>
  );
};

export default Home;
