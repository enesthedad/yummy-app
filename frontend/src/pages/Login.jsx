import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white">
      <div className="absolute top-0 w-full py-2 text-center bg-red-500 text-white text-[36px]">
        <Link to={"/"}>Yummy</Link>
      </div>
      <div className="w-[550px] px-[72px] py-[72px] mt-[72px] bg-white flex flex-col items-center gap-4 border-2 border-stone-300 rounded-lg shadow-lg shadow-stone-400">
        <form
          action="submit"
          className="flex flex-col items-center w-full gap-8"
        >
          <h2 className="text-[28px] lowercase mb-5 text-red-500 font-bold">
            Login to yummy
          </h2>
          <div className="flex flex-col items-start w-full gap-2">
            <label htmlFor="email">Email or Username</label>
            <input
              name="email"
              className="w-full px-2 py-2 rounded-md bg-stone-100"
              id="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="w-full px-2 py-2 rounded-md bg-stone-100"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-3 font-bold text-white bg-red-500 rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-[15px]">
          You don't have an account?{" "}
          <Link to={"/register"}>
            <span className="text-red-500">Register here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
