import axios from "axios"
import { useEffect, useState } from "react"

const useGetConversation = () => {

    const [loading , setLoading] = useState(false)
    const [conversations , setConversations] = useState([])


useEffect(()=>{
const  getConversation = async ()=>{
    setLoading(true)
    try {
        const res = await axios.get( "/api/users")

        if (res.error) {
            throw new Error(res.error)
            
        }

        setConversations(res.data)
    } catch (error) {
        toast.Error(error.message)
        
    }finally{
        setLoading(false)
    }
}
getConversation();
},[])

return {loading , conversations}

}

export default useGetConversation