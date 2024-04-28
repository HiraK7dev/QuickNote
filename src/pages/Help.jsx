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
        <div className="flex flex-col justify-end items-center h-[95%] w-[98%] rounded-3xl p-6">
          <div className="h-full w-[900px] m-3 overflow-y-auto">
            {/* Chat Bubbles */}
            {chat.length == 0 ? (
              <div className="flex flex-col justify-center items-center h-full w-full">
                <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text font-medium text-5xl">Hello, User</h1>
                <br/>
                <div className="w-[65%] flex justify-center items-center">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-black font-medium opacity-25">How can I help you today?</h1>
                </div>
              </div>
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
          <form className="flex justify-around items-center w-[900px] h-20" onSubmit={handlePrompt}>
            <input
              onChange={(event) => {setPrompt(event.target.value)}}
              value={prompt}
              type="text"
              placeholder="Enter a prompt here"
              className="input input-bordered bg-transparent w-[85%]"
            />
            <button className="btn btn-active btn-neutral w-[12%]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
