import React from "react";

const FriendSuggestCard = () => {
  return (
    <div className="friend-suggestion items-center p-1 gap-3 flex">
      <img
        className="h-10 object-cover rounded-full w-10"
        src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="friend-name text-[10px] flex flex-col justify-center text-start">
        <p className="font-bold">Robin Baby</p>
        <p className="text-[10px]">Ohio USA</p>
      </div>
    </div>
  );
};

export default FriendSuggestCard;
