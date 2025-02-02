import React from "react";
import GanderCheckbox from "./GanderCheckbox";

const SignUp = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className=" flex flex-col items-center justify-center min-w-[450px]  mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
          <h1 className="text-4xl font-semibold text-center text-gray-300">
            Sign Up
          </h1>

          <form>
            <div className="mb-2">
              <label className="label p-2">
                <span className="text-base label-text ">Full Name</span>
              </label>
              <input
                className=" w-full h-10 input input-bordered"
                type="text"
                placeholder="your full name"
              />
            </div>
            <div className="mb-2">
              <label className="label p-2">Username</label>
              <input
                className=" w-full h-10 input input-bordered"
                type="text"
                placeholder="your username"
              />
            </div>
            <div className="mb-2">
              <label className="label p-2" htmlFor="email">
                Email
              </label>
              <input
                className=" w-full h-10 input input-bordered"
                type="email"
                placeholder="your email"
              />
            </div>
            <div className="mb-2">
              <label className="label p-2" htmlFor="password">
                Password
              </label>
              <input
                className=" w-full h-10 input input-bordered"
                type="password"
                placeholder="your password"
              />
            </div>
            <div className="mb-2">
              <label className="label p-2" htmlFor="password">
                Confirm Password
              </label>
              <input
                className=" w-full h-10 input input-bordered"
                type="password"
                placeholder="confirm password"
              />
            </div>
            < GanderCheckbox />
            <a href="#" className="text-blue-400 hover:text-blue-500 mt-2">
              Have an account? login
            </a>
            <div className="text-center mt-4">
              <button className="w-full h-10 px-4 text-white bg-blue-400 rounded-lg hover:bg-blue-500">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
