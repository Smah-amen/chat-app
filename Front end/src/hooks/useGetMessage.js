import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../storeZustand/useConversation";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    if (!selectedConversation?._id) return;

    const getMessages = async () => {
      setLoading(true);
      try {
        console.log(selectedConversation._id);

        const res = await axios.get(
          `/api/massages/${selectedConversation._id}`
        );
        console.log("Response from API:", res);

        if (res.status === 200) {
          toast.success("Massages fetched successfully!");
          setMessages(res.data);
        }
        console.log(
          "Fetching messages for conversation ID:",
          selectedConversation._id
        );
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessage;
