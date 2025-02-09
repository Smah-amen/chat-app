import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import { useState } from "react";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}= useAuthContext()


  const login = async (username, password) => {
    if (!username ||!password) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", { username, password });
      console.log(res)
if( res.status === 200){
    toast.success("Login successful!");
  } 

  localStorage.setItem("chatUser" ,JSON.stringify(res));
  setAuthUser(res)
  if (res.error) {
    throw new Error(res.error)
  }

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading , login};
};

export default useLogin;
