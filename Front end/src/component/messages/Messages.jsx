import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../skelaton/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMsgs from "../../hooks/useListenMsgs";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useListenMsgs()
  console.log(messages);
  
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log();

  return (
    <div className="px-4 flex-1 overflow-auto message">
      {!loading &&
        messages?.length > 0 &&
        messages?.map((massage) => (
          <div key={massage._id} ref={lastMessageRef}>
            <Message message={massage} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, id) => <MessageSkeleton key={id} />)}

      {!loading && messages?.length === 0 && (
        <div className="text-center text-gray-400">
          Send a message to start the conversation
        </div>
      )}
    </div>
  );
};

export default Messages;

//const Messages = () => {
//   const { messages, loading } = useGetMessage();
//   console.log("messages:", messages);

//   return (
//     <div className="px-4 flex-1 overflow-auto message">
//       {loading &&
//         messages.length > 0 &&
//         messages?.map((massage) => (
//           <Message key={massage._id} message={massage} />
//         ))}

//       {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}

//       {!loading && messages.length === 0 && (
//         <div className="text-center text-gray-400">
//           {" "}
//           send message to start conversation
//         </div>
//       )}
//     </div>
//   );
// };
