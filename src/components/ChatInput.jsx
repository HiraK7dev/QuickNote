import React from 'react'

function ChatInput({ text }) {
  return (
    <div className="chat chat-end m-4">
        <div className="chat-bubble chat-bubble-success shadow-xl">{text}</div>
        <div className="chat-footer opacity-50">Seen</div>
    </div>
  )
}

export default ChatInput