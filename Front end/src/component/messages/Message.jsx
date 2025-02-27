/* eslint-disable react/prop-types */
import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../storeZustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  console.log("message", message);

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser.data._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start ";
  const formatTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.data.profilePic
    : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-blue-900" : "bg-green-900";
  const shackeClass = message.shouldShacke ? "shacke" : "";

  console.log(fromMe);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>

      <div className={`chat-bubble text-white pb-2  ${bgColor}  ${shackeClass}`}>
        {message?.massage}
      </div>

      <div className="chat-time opacity-50 text-sm flex gap-1 items-center">
        <span>{formatTime} </span>
      </div>
    </div>
  );
};

export default Message;
