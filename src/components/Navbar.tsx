"use client";
import Link from "next/link";
import Menu from "@/src/components/menu";
import CartIcon from "./CartIcon";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24">
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu ">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold">
        <Link href="/">Ranchers</Link>
      </div>
      <div className="md:hidden flex gap-4">
        {/* mobile view */}

        <Menu />
      </div>
      <div className="hidden md:flex gap-4">
        {user ? (
          <Link className="m-3.5" href="/">
            Login
          </Link>
        ) : (
          <Link href="/menu ">Orders</Link>
        )}
        <div className="flex items-center gap-2 cursor-pointer font-bold text-yellow-400 rounded-md">
          <Image
            className="invert"
            width={20}
            height={20}
            src="/phone.png"
            alt="phone"
          ></Image>
          <span>123 456 78</span>
        </div>
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
