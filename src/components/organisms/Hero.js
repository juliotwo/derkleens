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

          <div className="flex items-center justify-end">
            <div className="relative">
              <Image
                src="/images/hero.jpg"
                width={500}
                height={500}
                alt="Hero"
                className="rounded-lg relative z-10"
              />
              <div className="absolute bg-black w-full h-full -bottom-5 -right-5 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
