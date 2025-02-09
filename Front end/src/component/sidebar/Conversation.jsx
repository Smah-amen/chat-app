import useConversation from "../../storeZustand/useConversation";

const Conversation = ({ conversation, emoji, lastIndx }) => {
  const {selectedConversation , setSelectedConversation} = useConversation()

  const isSelacted = selectedConversation?._id === conversation._id
  return (
    <>
      <div className= {`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelacted ? "bg-sky-500" : "" }
        `}
        onClick={() => setSelectedConversation(conversation) }
        >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic}
             alt="user" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="text-sm font-medium">{conversation.fullName} </p>
            <p className="text-lg text-gray-400">{emoji} </p>
          </div>
        </div>
      </div>
      {lastIndx&& <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
