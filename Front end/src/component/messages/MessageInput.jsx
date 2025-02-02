import React from "react";
import { BsSend } from "react-icons/bs";


const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative "> 
      <input
        type="text"
        className="w-full h-10 px-4 border text-sm text-white block p-2.5 border-gray-600 bg-gray-700 rounded-lg"
        placeholder="Type a message..."
      />
      <button
      type="submit"
       className="absolute inset-y-0 end-0 flex items-center pe-3 ml-2 ">
     <BsSend />
      </button>
      </div>
    </form>
  );
};

export default MessageInput;
