import React, { useMemo } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
// import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  console.log("conversations", conversations);

  return (
    <div className="py-2 flex flex-col  min-w-[450px] overflow-auto">
      {conversations && conversations.length > 0 ? (
        conversations.map((conversation, Indx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            // emoji={getRandomEmoji()}
            lastIndx={Indx === conversations.length - 1}
          />
        ))
      ) : null}

      {loading && <span className="loading loading-spinner"></span>}
    </div>
  );
};

export default Conversations;
