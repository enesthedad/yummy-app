import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Post from "../components/Post";
import DesktopSidebar from "../components/DesktopSidebar";
import DesktopRightSidebar from "../components/DesktopRightSidebar";

const Home = () => {
  return (
    <div className="w-full flex bg-stone-300  min-h-screen mx-auto">
      <div className="w-1/6">
        <DesktopSidebar />
      </div>
      <div className="w-4/6 bg-stone-100">
        <Header />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="w-1/6">
        <DesktopRightSidebar />
      </div>
    </div>
  );
};

export default Home;
