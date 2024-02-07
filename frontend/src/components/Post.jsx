import React from "react";
import threedot from "../imgs/dots.png";
import FriendSuggestCard from "./FriendSuggestCard";
const Post = () => {
  return (
    <div className=" px-8 py-4 border-2 rounded-lg w-2/3 mx-auto mt-10 border-stone-200 bg-white flex flex-col gap-4">
      <div className="post-header flex justify-between items-center">
        <div className="text-red-400 flex items-center text-[12px]  px-2 gap-1">
          <i class="fa-solid fa-location-dot"></i>
          <p>Austria, Wien</p>
        </div>
        <div className="post-header-right">
          <img src={threedot} className="h-5" alt="" />
        </div>
      </div>
      <div className="post">
        <img
          className="overflow-hidden"
          src="https://images.pexels.com/photos/925684/pexels-photo-925684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="post-footer flex flex-col justify-center gap-2">
        <div className="footer-btns flex justify-between  ">
          <div className="">
            <FriendSuggestCard />
          </div>
          <div className="footer-btns-right items-center text-[18px] flex gap-6">
            <a href="#">
              <i class="fa-regular fa-heart"></i>
            </a>
            <a href="#">
              <i class="fa-regular fa-comment"></i>
            </a>
            <a href="#">
              <i class="fa-regular fa-bookmark"></i>
            </a>
          </div>
        </div>
        <div className="description">
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fuga
            minus quia, praesentium eos commodi dolorem sint sed rem recusandae
            expedita dicta, tenetur neque nisi, rerum quisquam ad. Dignissimos,
            consectetur!
          </p>
        </div>
        <div className="time-stamp font-sm text-stone-500">
          <p className="text-[10px]">03 February 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
