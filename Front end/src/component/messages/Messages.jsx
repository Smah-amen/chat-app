import React from 'react'
import Message from './Message'
import { Scrollbars } from 'react-custom-scrollbars-2';


const Messages = () => {
  return (
   
    <div className='px-4 flex-1 overflow-auto message'>
        <Message/>
        <Message/>
        <Message/>
        <Message/> 
         <Message/>
         <Message/>
        <Message/>
        <Message/>
        <Message/> 
         <Message/>
    </div>
 

  )
}

export default Messages