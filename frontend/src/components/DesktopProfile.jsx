import React from "react";

const DesktopProfile = () => {
  return (
    <div>
      <div className="w-[840px] bg-white flex   ">
        <div className="profile-picture w-1/3 flex justify-center">
          <img
            className="h-40 rounded-full"
            src="https://pbs.twimg.com/profile_images/1744703939310661632/SHtANmSp_400x400.jpg"
            alt=""
          />
        </div>
        <div className="profile-text flex justify-center flex-col w-2/3 p-4 gap-1">
          <div className="flex justify-between items-center">
            <h2 className=" space tracking-widest text-[28px] font-light ">
              @enesthedad
            </h2>
            <button className="bg-blue-700 px-4 py-2 rounded-md text-white">
              <i class="fa-solid fa-user-plus"></i> Follow
            </button>
          </div>
          <div className="follower-count flex justify-between text-center p-4">
            <div className="post-count">
              <p className="font-bold">Posts</p>
              <p className="text-stone-500">152</p>
            </div>
            <div className="follower-count">
              <p className="font-bold">Followers</p>
              <p className="text-stone-500">258</p>
            </div>
            <div className="following-count">
              <p className="font-bold">Following</p>
              <p className="text-stone-500">269</p>
            </div>
          </div>

          <div className="text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, in
            aspernatur porro pariatur minus sapiente iusto ipsum, inventore
            consectetur quae maiores corrupti neque voluptatum facilis velit
            praesentium soluta deserunt ad!
          </div>
          <div className=" text-stone-400">
            <p>Seoul,South Korea</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProfile;
