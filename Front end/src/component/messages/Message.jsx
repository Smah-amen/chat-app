import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../storeZustand/useConversation";
import { extractTime } from "../../utils/extractTime";
// import useConversation from "../storeZustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	// console.log(authUser.data);
	console.log(message);
	
	
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser?.data._id;
	const formattedTime = extractTime(message?.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.data.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message?.massage}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;