import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
<div className='chat-image avatar'>
    <div className='w-10 rounded-full'>
        <img src="icon.jpeg" alt='' />
    </div>
</div>

<div className='chat-bubble text-white bg-blue-500'>
hi what are you doing
</div>

<div className='chat-time'>
<span>1:30 PM</span>
</div>
    </div>
  )
}

export default Message