import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center max-w-6xl mx-5 xl:mx-auto py-2">
        <div className="hidden lg:inline-grid cursor-pointer">
          <Image
            height="100"
            width="150"
            src="https://links.papareact.com/ocw"
            alt="Instagram"
          />
        </div>
        <div className="lg:hidden cursor-pointer flex-shrink-0">
          <Image
            height="40"
            width="40"
            src="https://links.papareact.com/jjm"
            alt="Instagram"
          />
        </div>
        <div className="max-w-xs hidden md:inline-grid">
          <div className="relative mt-1 rounded-md">
            <div className="absolute inset-y-0 flex pl-3 items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black py-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn" />
            <div className="absolute -right-2 top-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <Bars3Icon className="h-9 w-9 md:hidden cursor-pointer" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
