import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../storeZustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start ";
  profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  bgClor = fromMe ? "bg-sky-300" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500 ${bgClor}`}>
        {message.Message}
      </div>

      <div className="chat-time">
        <span>1:30 PM</span>
      </div>
    </div>
  );
};

export default Message;
