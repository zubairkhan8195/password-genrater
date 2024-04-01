import { toBeChecked } from "@testing-library/jest-dom/matchers";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PassswordGenrater() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [smallCharAllowed, setSmallCharAllowed] = useState(true);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [capitalCharAllowed, setCapitalCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // const passwordRef = useRef(null);

  const inputArray = [
    {
      id: "numberInput",
      onChangerFn: () => setNumberAllowed((prev) => !prev),
      labelText: "Numbers",
      defaultvalue: "defaultChecked",
      spanText: "(0-9)",
    },
    {
      id: "smallCharAllowed",
      onChangerFn: () => setSmallCharAllowed((prev) => !prev),
      labelText: "Small Letters",
      defaultvalue: "defaultChecked",
      spanText: "(a-z)",
    },
    {
      id: "specialCharAllowed",
      onChangerFn: () => setSpecialCharAllowed((prev) => !prev),
      labelText: "special Characters",
      // defaultvalue: "specialCharAllowed",
      spanText: "(!#$%&@...)",
    },
    {
      id: "capitalCharAllowed",
      onChangerFn: () => setCapitalCharAllowed((prev) => !prev),
      labelText: "Capital Letters",
      // defaultvalue: "capitalCharAllowed",
      spanText: "(A-Z)",
    },
  ];

  const passwordGenrater = useCallback(() => {
    let pass = "";
    let str = "";

    if (numberAllowed) str += "0123456789";
    if (smallCharAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (capitalCharAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specialCharAllowed) str += "!@#$%^&*-_+=(){}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [
    length,
    numberAllowed,
    smallCharAllowed,
    specialCharAllowed,
    capitalCharAllowed,
    setPassword,
  ]);

  // const copyPasswordToClipboard = useCallback(() => {
  //   window.navigator.clipboard.writeText(password);
  //   passwordRef.current?.select();
  // }, [password]);

  // useEffect(() => {
  //   passwordGenrater();
  // }, [
  //   length,
  //   numberAllowed,
  //   smallCharAllowed,
  //   capitalCharAllowed,
  //   specialCharAllowed,
  //   setPassword,
  // ]);

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
              {length}
            </span>
          </div>
          <input
            type="range"
            defaultValue={6}
            min={6}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
        </div>
        {/*checkbox input */}
        {inputArray.map(
          ({ id, onChangerFn, labelText, spanText, defaultvalue }, index) => (
            <div key={index} className="flex items-center gap-x-2 mt-4">
              <input
                type="checkbox"
                id={id}
                defaultChecked={defaultvalue}
                onChange={onChangerFn}
                className="w-6 h-6"
              />
              <label htmlFor="numberInput" className="text-xl font-semibold">
                {labelText}
                <span className="text-[#747982]">{spanText}</span>
              </label>
            </div>
          )
        )}
        {/* button and password inpout */}
        <div className="flex flex-col mb-4">
          <button
            onClick={passwordGenrater}
            // onClick={copyPasswordToClipboard}
            className="text-white text-lg bg-blue-700 outline-none  rounded-md font-bold py-2 mt-4"
          >
            Generate
          </button>
          <input
            type="text"
            className="outline-none text-lg text-center rounded-md font-semibold py-5 mt-3 mb-6"
            placeholder="Password"
            value={password}
            readOnly
            // ref={passwordRef}
          />
        </div>
      </div>
    </div>
  );
}
