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
        
        const res = await axios.get("/api/massages/677e98ad7fd163937178b81e")
        // (`/api/massages/${selectedConversation._id}`);
        console.log(res.data);
        if(res.status==200) {
          toast.success("Messages fetched successfully!");
          console.log(res.data)

        }
if(res.error) {
  throw new Error(res.error);
 
}

        setMessages(res); 
        
      } catch (error) {
        toast.error(error.messages);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
    
  }, [selectedConversation?._id, setMessages]); 

 

  return { messages, loading };
};

export default useGetMessage;
