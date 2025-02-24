/* eslint-disable react/prop-types */
import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../storeZustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  console.log("message", message);
  console.log(message._id);
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start ";
  const formatTime = message.createdAt ? extractTime(message.createdAt) : "00:00";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-blue-900" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>

      <div className={`chat-bubble text-white  ${bgColor}`}>
        {message.massage}
      </div>

      <div className="chat-time opacity-50 text-sm flex gap-1 items-center">
        <span>{ formatTime} </span>
      </div>
    </div>
  );
};

export default Message;
