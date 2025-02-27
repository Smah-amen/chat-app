import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import useSendMessage from "../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

 
  const addEmoji = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
       
        <button
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="absolute inset-y-0 start-0 flex items-center ps-3 text-gray-300"
        >
          <FaSmile className="text-xl" />
        </button>

        
        <input
          type="text"
          className="w-full h-10 px-10 border text-sm text-white block p-2.5 border-gray-600 bg-gray-700 rounded-lg"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

  
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 ml-2 ">
          {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
        </button>

    
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-0 bg-gray-700 p-2 rounded-lg shadow-lg">
            <EmojiPicker onEmojiClick={addEmoji} />
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
