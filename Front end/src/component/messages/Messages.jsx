import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";

const Messages = () => { 
  const { messages, loading } = useGetMessage();
  console.log("messages:", messages);

  return (
    <div className="px-4 flex-1 overflow-auto message">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
