import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatReply from "../components/ChatReply";
import ChatInput from "../components/ChatInput";

function Help() {
  const [prompt, setPrompt] = useState(``);
  const [chat, setChat] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  async function handlePrompt(event){
    event.preventDefault();
    setChat([
      ...chat,
      {
        id: Date.now(),
        input: prompt,
        output: `Loading`,
      }
    ]);
    run();
    setPrompt(``);
  }

  
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    updateOutput(text);
  }

  function updateOutput(ans) {
    setChat(chat => chat.map((val, index) => {
      if(index === chat.length - 1){
        return {
          ...val,
          output: ans,
        }
      } else {
        return val
      }
    }))
  }

  return (
    <div className="flex justify-start">
      <Sidebar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-end items-center bg-slate-200 h-[95%] w-[98%] rounded-3xl p-6">
          <div className="h-full w-[98%] m-3 overflow-y-auto">
            {/* Chat Bubbles */}
            {chat.length == 0 ? (
              <h1>Hello</h1>
            ) : (
              chat.map((item) => {
                return (
                  <>
                    <ChatInput text={item.input}/>
                    <ChatReply text={item.output}/>
                  </>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input Field */}
          <form className="flex justify-around items-center w-full h-20" onSubmit={handlePrompt}>
            <input
              onChange={(event) => {setPrompt(event.target.value)}}
              value={prompt}
              type="text"
              placeholder="Message Ai..."
              className="input input-bordered bg-transparent w-[90%]"
            />
            <button className="btn btn-active btn-neutral w-[8%]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
