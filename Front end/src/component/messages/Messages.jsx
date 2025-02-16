import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../skelaton/MessageSkeleton";

const Messages = () => { 
  const { messages, loading } = useGetMessage();
  console.log("messages:", messages);

  return (
    <div className="px-4 flex-1 overflow-auto message">
{loading && messages.length >0 && messages .map((message) =>(
  <Message key={message._id} message={message} />  // replace Message with your actual Message component
 
))}

   {loading && [...Array(4)].map((_, idx) => <MessageSkeleton  key={idx}/>  )}

   {!loading && messages.length === 0 && (
     <div className="text-center text-gray-400"> send message to start conversation</div>
   )}
    </div>
  );
};

export default Messages;
