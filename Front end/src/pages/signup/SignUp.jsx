import React, { useState } from "react";
import GanderCheckbox from "./GanderCheckbox";
import { Link } from "react-router-dom";
import UseSignup from "../../hooks/UseSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = UseSignup(); //custom hook for api calls

  const handleGenderCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    await signup(inputs);
  };

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center min-w-[450px] mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-4xl font-semibold text-center text-gray-300">Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="label p-2">Full Name</label>
              <input
                className="w-full h-10 input input-bordered"
                type="text"
                placeholder="Your full name"
                value={inputs.fullname}
                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="label p-2">Username</label>
              <input
                className="w-full h-10 input input-bordered"
                type="text"
                placeholder="Your username"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="label p-2">Password</label>
              <input
                className="w-full h-10 input input-bordered"
                type="password"
                placeholder="Your password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="label p-2">Confirm Password</label>
              <input
                className="w-full h-10 input input-bordered"
                type="password"
                placeholder="Confirm password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

            <GanderCheckbox onCheckboxChange={handleGenderCheckbox} selectGender={inputs.gender} />

            <Link to="/login" className="text-blue-400 hover:text-blue-500 mt-2">Have an account? Login</Link>

            <div className="text-center mt-4">
              <button
                className="w-full h-10 px-4 text-white bg-blue-400 rounded-lg hover:bg-blue-500"
                type="submit"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner">Signing Up </span>: "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
