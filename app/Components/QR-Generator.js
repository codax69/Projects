"use client";
import React, { useState } from "react";
import QRCode from "react-qr-code";
const QRGenerator = () => {
  const [input, setInput] = useState("");
  const [Qr, setQr] = useState("");
  const handleClick = () => {
    setQr(input);
    setInput("");
    console.log(input);
  };
  return (
    <>
      <div className="text-black flex flex-col item-center max-w-xl mx-auto pt-24">
        <input
          onChange={(e) => setInput(e.target.value)}
          name="qr"
          value={input}
          placeholder="Enter Link"
          className="mb-6 outline-none font-medium p-2 rounded-md"
          type=""
        />
        <button
          disabled={!input.trim()}
          onClick={handleClick}
          className="bg-white rounded-xl p-4"
        >
          Generate QR
        </button>
        <QRCode id="Qr" value={Qr} size={400} className="bg-white mt-5 fill-slate-600" />
      </div>
    </>
  );
};

export default QRGenerator;
