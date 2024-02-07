import React from "react";
import FriendSuggestCard from "./FriendSuggestCard";

const DesktopRightSidebar = () => {
  return (
    <div className="bg-white fixed h-screen w-1/6">
      <div className="sidebar-header p-4     flex justify-between border-b-4 border-stone-100 border-x-2">
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="sidebar-body">
        <div className="trends flex flex-col justify-center border-4 border-stone-100 items-center px-4 py-2">
          <h3 className=" font-bold">Trending Posts</h3>
          <div className="collage flex flex-col gap-2 justify-center items-center w-full px-4 py-2 ">
            <div className="trending-top flex gap-2 justify-center">
              <img
                className="w-[72px] h-[72px] object-cover rounded-md"
                src="https://images.pexels.com/photos/17403707/pexels-photo-17403707/free-photo-of-moda-adam-kaldirim-genc.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                className="w-[72px] h-[72px] object-cover rounded-md"
                src="https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="trending-bottom flex gap-2 justify-center">
              <img
                className="w-[72px] h-[72px]  object-center object-cover rounded-md"
                src="https://images.pexels.com/photos/3091203/pexels-photo-3091203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                className="w-[72px] h-[72px] object-center object-cover rounded-md"
                src="https://images.pexels.com/photos/1013326/pexels-photo-1013326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="suggestion px-4 py-2 text-center border-4 border-stone-100">
          <h3 className=" font-bold">Friends Suggestions</h3>
          <FriendSuggestCard />
          <FriendSuggestCard />
          <FriendSuggestCard />
          <FriendSuggestCard />
        </div>
      </div>
      <div className="sidebar-footer"></div>
    </div>
  );
};

export default DesktopRightSidebar;
