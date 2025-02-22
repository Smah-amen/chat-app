import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/users");

        if (res.error) {
          throw new Error(res.error);
        }

        setConversations(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
