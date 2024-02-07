import React from "react";
import User from "./User";
import { Link } from "react-router-dom";
const DesktopSidebar = () => {
  return (
    <div className="fixed bg-white  w-1/6 flex flex-col min-h-screen gap-10 justify-between">
      <div className="logo font-bold flex items-center text-red-500 gap-2 py-4 text-[20px] justify-center">
        <i class="fa-solid fa-utensils"></i> yummy
      </div>
      <Link to={"/profile"}>
        <User />
      </Link>
      <div className="links flex flex-col gap-6 p-4  text-gray-500 ">
        <a
          href="#"
          className="flex gap-2 items-center text-[14px] text-red-500"
        >
          <i class="fa-solid fa-house"></i>Feed
        </a>
        <a href="#" className="flex gap-2 items-center text-[14px]">
          <i class="fa-solid fa-layer-group"></i> Explore
        </a>
        <a href="#" className="flex gap-2 items-center text-[14px]">
          <i class="fa-solid fa-bookmark"></i>Bookmarks
        </a>
        <a href="#" className="flex gap-2 items-center text-[14px]">
          <i class="fa-solid fa-gear"></i>Settings
        </a>
        <hr className="divide-y-2" />
        <a href="#" className="flex mb-10 gap-2 items-center text-[14px]">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>Logout
        </a>
      </div>
    </div>
  );
};

export default DesktopSidebar;
