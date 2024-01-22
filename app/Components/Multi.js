"use client";
import React, { useState } from "react";
import Question from "../Components/Question";

const Multi = () => {
  const [select, setSelect] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);
  const handleClick = (e) => {
    setSelect(e === select ? null : e);
  };
  const handleMultiselect = (currentId) => {
    let cpyMulti = [...multiSelect]
    let findIndex = cpyMulti.indexOf(currentId)
    if(findIndex === -1) cpyMulti.push(currentId)
    else cpyMulti.splice(findIndex,1)
    setMultiSelect(cpyMulti)
    
  };
  return (
    <>
    <div className="flex flex-col pt-5 items-center">
        <button
          onClick={() => setEnableMulti(!enableMulti)}
          className="bg-white px-4 py-3 rounded-xl shadow-white shadow-md hover:shadow-slate-500 text-black font-bold flex items-center"
        >
          Enable Multi Selection
        </button>
        <ul className="flex flex-col w-2/6 mx-auto pt-5">
          {Question && Question.length
            ? Question &&
              Question.map((value, index) => {
                return (
                  <span className="flex flex-col">
                    {" "}
                    <span
                      className="my-2"
                      onClick={() =>
                        enableMulti
                          ? handleMultiselect(index)
                          : handleClick(index)
                      }
                      key={index}
                    >
                      {value.qus}
                    </span>
                    { enableMulti ? multiSelect.indexOf(index) !== -1 && <span>{value.ans}</span>:
                      select === index &&<span>{value.ans}</span>
                    }
                  </span>
                );
              })
            : null}
        </ul>
      </div>
    </>
  )
}

export default Multi