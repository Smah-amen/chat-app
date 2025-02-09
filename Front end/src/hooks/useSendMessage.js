import { useState } from "react";
import useConversation from "../storeZustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `/api/messages/send/${selectedConversation._id}/messages`,
        { message },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Message sent successfully:", data);

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
