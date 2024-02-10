import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white">
      <div className="absolute top-0 w-full py-2 text-center bg-red-500 text-white text-[36px]">
        <Link to={"/"}>Yummy</Link>
      </div>
      <div className="w-[550px] text-[14px] mt-[72px] px-[72px] py-[24px] bg-white flex flex-col items-center gap-2 border-2 border-stone-300 rounded-lg shadow-lg shadow-stone-400">
        <form
          action="submit"
          className="flex flex-col items-center w-full gap-3"
        >
          <h2 className="text-[28px] lowercase mb-2 text-red-500 font-bold">
            Register to yummy
          </h2>
          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-bold text-zinc-500" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-2 py-2 rounded-md bg-stone-100"
              id="email"
              type="text"
            />
          </div>{" "}
          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-bold text-zinc-500" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-2 py-2 rounded-md bg-stone-100"
              id="username"
              type="text"
            />
          </div>{" "}
          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-bold text-zinc-500" htmlFor="fullname">
              Fullname
            </label>
            <input
              className="w-full px-2 py-2 rounded-md bg-stone-100"
              id="fullname"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-bold text-zinc-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-2 py-2 rounded-md bg-stone-100"
              id="password"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2 select">
            <label className="font-bold text-zinc-500" htmlFor="gender">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="px-2 py-2 rounded-md bg-stone-100"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-3 font-bold text-white bg-red-500 rounded-md"
          >
            Register
          </button>
        </form>
        <p className="text-[15px]">
          You have already an account?{" "}
          <Link to={"/login"}>
            <span className="text-red-500">Login here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
