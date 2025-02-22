import { useState } from "react";
import useConversation from "../storeZustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (massage) => {
    setLoading(true);
    try {
      const data = await axios.post(
        // `http://localhost:5000/api/massages/send/${selectedConversation._id}`,
        `/api/massages/send/${selectedConversation._id}`,
        { massage },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Message sent successfully:", data);

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.response?.data?.error || toast.error(error));
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
