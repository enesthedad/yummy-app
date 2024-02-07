import React from "react";
import logoIcon from "../imgs/knife-and-fork.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex border-4 border-stone-100 w-full bg-white justify-between px-20 py-4 items-center">
      <Link to={"/"}>
        <div className="logo font-bold flex items-center text-red-500 gap-2 py-4 text-[20px] justify-center">
          <i class="fa-solid fa-utensils"></i> yummy
        </div>
      </Link>
      <input
        className="px-2 py-1 rounded-2xl bg-stone-100 border-2 w-[450px] border-stone-200"
        type="search"
      />
      <button className="bg-red-500 text-white font-bold px-4 py-1 rounded-2xl">
        + Create a new post
      </button>
    </header>
  );
};

export default Header;
