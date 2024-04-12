import Link from "next/link";
import Image from "next/image";
import Navbar from "../molecules/Navbar";
import Button from "../atoms/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full flex flex-col h-screen">
      <Navbar textBlack={false} />
      <div className="w-full h-screen px-4 mx-auto flex bg-green-200 flex-col">
        <div className="container px-10 h-full grid grid-cols-2">
          <div className="flex flex-col justify-center text-black">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold">
              Best Business
              <br />
              Consulting Service
            </h1>

            <div className="mt-5 text-lg">
              <p>
                Our company is a leading organizer of international congresses
                specializing in courses on business leadership, technological
                innovation, and financial process efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image src="/images/hero.svg" width={400} height={400} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
