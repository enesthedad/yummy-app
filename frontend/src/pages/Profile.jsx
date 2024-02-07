import React from "react";
import DesktopHeader from "../components/DesktopHeader";
import User from "../components/User";
import ProfilePost from "../components/ProfilePost";
import DesktopProfile from "../components/DesktopProfile";

const Profile = () => {
  return (
    <div>
      <DesktopHeader />
      <div className="mt-10 flex justify-center">
        <DesktopProfile />
      </div>
      <div className="posts">
        <ProfilePost />
      </div>
    </div>
  );
};

export default Profile;
