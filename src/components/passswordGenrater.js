import React, { useState } from "react";

export default function PassswordGenrater() {
  const [length, setLength] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex items-center justify-center h-screen bg-bgPassword bg-cover bg-no-repeat">
      <div className="w-[600px] text-[#313137]  bg-white/40 backdrop-blur-lg rounded-xl px-12 pt-14 shadow-[0_25px_15px_rgba(0,0,0,0.25),0_25px_20px_rgba(0,0,0,0.1)]">
        {/* heading */}
        <div>
          <h1 className="text-4xl font-semibold">Passsword Generater</h1>
        </div>
        {/* length input */}
        <div className="flex flex-col gap-x-1">
          <div className="flex items-center justify-between mt-8 mb-3 ">
            <label className=" text-lg font-semibold">Length</label>
            <span className="text-base bg-white font-semibold border border-[#bbb6b0] rounded-lg pl-2 px-20 py-1.5">
              8
            </span>
          </div>
          <input type="range" min={8} max={100} className="cursor-pointer" />
        </div>
        {/* number checkbox input */}
        <div className="flex items-center gap-x-2 mt-4">
          <input type="checkbox" id="numberInput" className="w-6 h-6" />
          <label htmlFor="numberInput" className="text-xl font-semibold">
            Numbers
            <span className="text-[#747982]">(0-9)</span>
          </label>
        </div>
        {/*small letter  input */}
        <div className="flex items-center gap-x-2 mt-4">
          <input type="checkbox" id="smallLetterInput" className="w-6 h-6  " />
          <label htmlFor="smallLetterInput" className="text-xl font-semibold">
            Small Letters
            <span className="text-[#747982]">(a-z)</span>
          </label>
        </div>
        {/*capital letter  input */}
        <div className="flex items-center gap-x-2 mt-4">
          <input
            type="checkbox"
            id="capitalLetterInput"
            className="w-6 h-6  "
          />
          <label htmlFor="capitalLetterInput" className="text-xl font-semibold">
            Capital Letters
            <span className="text-[#747982]">(A-Z)</span>
          </label>
        </div>
        {/*special letter  input */}
        <div className="flex items-center gap-x-2 mt-4">
          <input
            type="checkbox"
            id="capitalLetterInput"
            className="w-6 h-6  "
          />
          <label htmlFor="capitalLetterInput" className="text-xl font-semibold">
            Special Characters
            <span className="text-[#747982]">(!#$%&@...)</span>
          </label>
        </div>
        {/* button and password inpout */}
        <div className="flex flex-col mb-4">
          <button
            // onClick={copyPasswordToClipboard}
            className="text-white text-lg bg-blue-700 outline-none  rounded-md font-bold py-2 mt-4"
          >
            Copy
          </button>
          <input
            type="text"
            className="outline-none text-lg rounded-md font-semibold px-3 py-5 mt-3 mb-6"
            placeholder="Password"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
