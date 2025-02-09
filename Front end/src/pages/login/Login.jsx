import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className=" flex flex-col items-center justify-center min-w-80  mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
          <h1 className="text-4xl font-semibold text-center text-gray-200">
            Login
            {/* <span className="text-blue-500">Chat app </span> */}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="label p-2 ">
                <span className="text-base label-text ">username</span>
              </label>
              <input
                className=" w-full h-10 input input-bordered"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="label p-2">
                <span className="text-base label-text">password</span>
              </label>
              <input
                className=" w-full h-10 input input-bordered"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link
                to="/signup"
                className="text-blue-400 hover:text-blue-600 text-sm underline "
              >
                don't have an account
              </Link>
              {/* <a href="#" className="text-blue-500">
                Forgot Password?
              </a> */}
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className=" btn hover:bg-blue-400  text-white btn-sm mt-2"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
