import { pageName } from "@/data";
import Image from "next/image";

const Know = () => {
  return (
    <section
      id="about"
      className="relative w-full flex justify-center flex-col min-h-screen bg-black bg-center bg-cover"
    >
      <div className="container px-4 mx-auto grid grid-cols-2 gap-5 justify-center h-full items-center">
        <div className="flex justify-center items-center bg-green-400 h-full p-10">
          <Image
            src="/images/interview.svg"
            width={300}
            height={300}
            alt="Interview"
          />
        </div>

        <div className="flex flex-col bg-white p-10 h-full">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase">
            About us
          </h1>
          <div className="text-sm mt-10">
            <p>
              At {pageName}, we are passionate about driving business
              development and growth through high-impact educational
              experiences. We believe in the power of knowledge and networking
              to empower individuals and organizations to thrive in today&apos;s
              dynamic business landscape. Our international congresses bring
              together industry leaders, thought-provoking speakers, and
              cutting-edge insights to inspire innovation, enhance leadership
              skills, and optimize financial processes. Join us as we shape the
              future of business excellence on a global scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Know;
