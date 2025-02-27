import { useState } from "react";
import useConversation from "../storeZustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  console.log(selectedConversation._id);
  

  const sendMessage = async (massage) => {
    setLoading(true);
    try {
      const response = await axios.post(
       `/api/massages/send/${selectedConversation._id}`,
        { massage },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const data = response.data; 
      console.log(data);
      

      if (!data || data.error) {
        throw new Error(data?.error || "Failed to send message");
      }

      setMessages([... messages, data]);
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred while sending the message");
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
