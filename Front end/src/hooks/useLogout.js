import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/logout");

      if (res.status === 200) {
        console.log("User logged out successfully");
      }

      if (res.error) {
        throw new Error(res.error);
      }

      localStorage.removeItem("chatUser");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
