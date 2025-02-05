import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { json } from "express";
import { useAuthContext } from "../Context/AuthContext";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext()

  const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
    console.log("Calling signup function...");
    
    if (!fullname || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending request with axios...");

      const res = await axios.post("/api/auth/signup", {
        fullname,
        username,
        password,
        confirmPassword,
        gender,
      });

      console.log("Server response:", res.data);
      
      toast.success("Signup successful!");

      if (res.error){
        throw new Error(res.error)
      }
      localStorage.setItem("chatUser", JSON.stringify(res))
      setAuthUser(res)
      
    } catch (error) {
      console.error("Axios error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default UseSignup;
