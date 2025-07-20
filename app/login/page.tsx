import Image from "next/image";
import Link from "next/link";
import React from "react";

const Loginpage = () => {
  return (
    <div>
      <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
        <div className="h-ful shadow-2xl rounded-md flex flex-col md:flex-row md:h-[100%] md:w-full lg:w-[60%] 2xl:w-1/2 mt-16">
          <div className="relative h-1/3 w-full md:h-full md:w-1/2 ">
            <Image
              src={"/hotel_65.jpg"}
              alt={""}
              fill
              className="object-cover"
            />
          </div>{" "}
          {/* kskdk */}
          <div className="p-10 flex flex-col gap-8 md:w-1/2">
            <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
            <p>
              Log into your account or create a new one using social buttons
            </p>
            <button className="flex gap-4 ring-1 ring-orange-100 rounded-md p-2">
              <Image
                src={"/google.png"}
                alt={""}
                width={20}
                height={20}
                className="object-contain"
              ></Image>
              <span>Sign in with Google</span>
            </button>
            <button className="flex gap-4 ring-1 ring-blue-100 rounded-md p-2">
              <Image
                src={"/facebook.png"}
                alt={""}
                width={20}
                height={20}
                className="object-contain"
              ></Image>
              <span>Sign in with Facebook</span>
            </button>
            <p className="text-sm">
              Have a problem{" "}
              <Link className="underline" href={"/"}>
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
