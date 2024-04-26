import React from 'react'

function ChatReply({ text }) {
  return (
    <div className="chat chat-start m-4">
        <div className="chat-bubble chat-bubble-primary shadow-xl">{text == `Loading`? <span className="loading loading-dots loading-md"></span> : text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
    </div>
  )
}

export default ChatReply