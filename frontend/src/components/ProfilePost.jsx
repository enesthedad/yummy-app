import React from "react";
import Post from "./Post";

const ProfilePost = () => {
  return (
    <div className="w-[840px] bg-stone-50 mx-auto">
      <div className="post-header shadow-md text-[20px] w-full text-stone-500 flex items-center   justify-center">
        <a
          className="items-center gap-[2px] border-r-[1px]  border-stone-100  flex justify-center py-4 bg-white w-1/3"
          href="#"
        >
          <i class="fa-solid fa-images text-[14px]"></i> <p>posts</p>
        </a>
        <a
          className="items-center gap-[2px] border-r-[1px] flex justify-center py-4 bg-white w-1/3"
          href="#"
        >
          <i class="fa-solid fa-hashtag text-[14px]"></i> <p>tags</p>
        </a>
        <a
          className="items-center gap-[2px] flex justify-center py-4 bg-white w-1/3"
          href="#"
        >
          <i class="fa-solid fa-heart text-[14px]"></i> <p>likes</p>
        </a>
      </div>
      <div className="posts w-full grid-cols-3 gap-4 grid p-4">
        <img
          className="aspect-square object-cover"
          src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://images.pexels.com/photos/203561/pexels-photo-203561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://images.pexels.com/photos/6898855/pexels-photo-6898855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://images.pexels.com/photos/6342292/pexels-photo-6342292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfilePost;
