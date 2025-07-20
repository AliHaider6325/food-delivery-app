import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-8 md:h-16 p-2 lg:p-4 xl:p-20 2xl:h-8 text-red-500 flex items-center justify-between">
      <Link className="font-bold text-xl" href={"/"}>
        Ranchers
      </Link>
      <p>©ALL RIGHT RESERVED</p>
    </div>
  );
};

export default Footer;
Footer;
