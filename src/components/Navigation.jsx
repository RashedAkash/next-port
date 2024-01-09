"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHome, RxPerson, RxDashboard, RxClipboard, RxMobile } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";


const Navigation = () => {
   const pathname = usePathname()
  return (
    <div  className="absolute z-[50] md:left-1/3 bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7">
        <Link className={`link ${pathname === '/' ? 'text-red-700 ' : ''}`} href='/' ><RxHome className="text-2xl" /></Link>
        <Link className={`link ${pathname === '/contact' ? 'text-red-700 ' : ''}`} href='/contact' ><IoIosCall className="text-2xl" /></Link>
        <Link className={`link ${pathname === '/skilll' ? 'text-red-700 ' : ''}`} href='/skilll' ><RxClipboard className="text-2xl" /></Link>
        <Link className={`link ${pathname === '/projects' ? 'text-red-700 ' : ''}`} href='/projects' ><RxDashboard  className="text-2xl" /></Link>
         
    </div>
  );
};

export default Navigation;