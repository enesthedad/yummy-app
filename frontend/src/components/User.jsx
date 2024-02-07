import React from "react";

const User = () => {
  return (
    <div>
      <div className="user-profile flex flex-col">
        <div className="user-info flex flex-col items-center ">
          <div className="user-info-img">
            <img
              className="h-20 rounded-full"
              src="https://pbs.twimg.com/profile_images/1744703939310661632/SHtANmSp_400x400.jpg"
              alt=""
            />
          </div>
          <div className="username font-bold text-[16px]">enesthedad</div>
          <div className="user-location text-stone-400 text-[12px]">
            Seoul Korea
          </div>
        </div>
        <div className="user-followers text-[12px] flex justify-center gap-6 p-4 ">
          <div className="post-count flex flex-col items-center">
            <h3 className="font-bold">Posts</h3>
            <p className="text-stone-500">123</p>
          </div>
          <div className="follower-count flex flex-col items-center">
            <h3 className="font-bold">Followers</h3>
            <p className="text-stone-500">552</p>
          </div>
          <div className="following-count flex flex-col items-center">
            <h3 className="font-bold">Following</h3>
            <p className="text-stone-500">475</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
