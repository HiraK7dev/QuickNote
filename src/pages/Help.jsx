import React from 'react'
import Sidebar from '../components/Sidebar'
import { GoogleGenerativeAI } from "@google/generative-ai";

function Help() {
  
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = "Write a story about a magic backpack."
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }

  return (
    <div className='flex justify-start'>
      <Sidebar/>
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='flex flex-col justify-end items-center bg-slate-300 h-[95%] w-[98%] rounded-3xl p-6'>
          {/* Input Field */}
          <form className='flex justify-around items-center w-full h-20'>
            <input type="text" placeholder="Message Ai..." className="input input-bordered bg-transparent w-[90%]" />
            <button className="btn btn-active btn-neutral w-[8%]">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Help