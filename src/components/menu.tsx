"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const [isUser, setUser] = useState(false);

  const links = [
    { id: 0, title: "Homepage", url: "/" },
    { id: 1, title: "Menu", url: "/menu" },
    { id: 2, title: "Working Hours", url: "/" },
    { id: 3, title: "Contact", url: "/" },
  ];
  return (
    <div>
      {isOpen ? (
        <Image
          onClick={() => setOpen(false)}
          alt="menu"
          width={20}
          height={20}
          src={"/close.png"}
        ></Image>
      ) : (
        <Image
          onClick={() => setOpen(true)}
          alt="menu"
          width={20}
          height={20}
          src={"/open.png"}
        ></Image>
      )}
      {isOpen && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-100 flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!isUser ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              orders
            </Link>
          )}
          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
