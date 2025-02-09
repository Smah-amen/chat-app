import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MdOutlineWavingHand } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../storeZustand/useConversation";

const MessageContainer = () => {
const {selectedConversation , setSelectedConversation} = useConversation()

useEffect(() =>{
  return () => setSelectedConversation(null)
}, [setSelectedConversation])


  return (
    <div className="md:min-w-[600px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className=" bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">to: </span>
            <span className="text-gray-900">{selectedConversation.fullName} </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-lg text-gray-200 font-semibold flex flex-col
      items-center gap-2"
      >
        <p className="flex justify-between gap-2  text-3xl">
        welcome<MdOutlineWavingHand size={30} className= "text-sky-600" />  samah amen ❄️
        </p>
        <p> select a chat to start conversation</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
