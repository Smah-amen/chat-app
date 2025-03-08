import { useEffect } from "react"
import { useSocketContext } from "../Context/SocketContext"
import useConversation from "../storeZustand/useConversation"
import notification from "../assets/sounds/notification.mp3"
const useListenMsgs = () => {
const {socket} = useSocketContext()
const {messages ,setMessages} = useConversation()


  useEffect(() =>{
    socket.on('newMessage', (newMessage) => {
        newMessage.shouldShacke = true
        const sound = new Audio (notification)
        sound.play()
      setMessages([...messages, newMessage])
    })
    return () => socket?.off('newMessage') 
  } , [socket , setMessages ,messages])
}

export default useListenMsgs