import { Socials } from "@/constants";
import Image from "next/image";


const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Rashed{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Hossain{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        <a href="https://github.com/RashedAkash">
          <Image
            src="/git.png"
            alt="socialName"
            width={28}
            height={28}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/rashed-hossain-1845762a4/">
          <Image
            src="/in.jpeg"
            alt="socialName"
            width={28}
            height={28}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </a>
        <a href="https://www.facebook.com/akash.stk.3/">
          <Image src="/facebook.svg" alt="socialName" width={28} height={28} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;