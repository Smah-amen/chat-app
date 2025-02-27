import { useEffect } from "react"
import { useSocketContext } from "../Context/SocketContext"
import useConversation from "../storeZustand/useConversation"

const useListenMsgs = () => {
const {socket} = useSocketContext()
const {messages ,setMessages} = useConversation()


  useEffect(() =>{
    socket.on('newMessage', (newMessage) => {
        newMessage.shouldShacke = true
      setMessages([...messages, newMessage])
    })
    return () => socket?.off('newMessage')  // Clean up the listener when component unmounts
  } , [socket , setMessages ,messages])
}

export default useListenMsgs