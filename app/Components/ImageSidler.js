"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSidler = (props) => {
  const [Image, setImage] = useState([]);
  const [CurrentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false);
  const [MsgError, setMsgError] = useState(false);

  useEffect(() => {
    if (props.url !== null) {
      ImageLoad(props.url);
    }
  }, [props.url]);

  const ImageLoad = async (url) => {
    try {
      setLoading(true);
      const reopens = await fetch(url);
      const data = await reopens.json();
      console.log(data);
      if (data) {
        setImage(data);
      }
      setLoading(false);
    } catch (err) {
      setMsgError(err.message);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Data Loading | Please Wait.....!</div>;
  }
  if (MsgError) {
    return <div>{MsgError.err}</div>;
  }
  const handlePrev = () =>{
    setCurrentSlide(setCurrentSlide === 0 ? Image.length - 1 : CurrentSlide -1 )
  } 
  const handleNext = () =>{
    setCurrentSlide(CurrentSlide === Image.length - 1 ? 0 :CurrentSlide + 1 )
  }
  return (
    <>
    <div className="max-w-7xl mx-auto">
    <div className=" relative flex justify-center items-center max-w-2xl mx-auto h-auto select-none pt-32">
      <BsArrowLeftCircleFill size={40} className=" absolute left-1" onClick={handlePrev}/>
      {Image && Image.length
        ? Image.map((value, index) => {
            return <img key={index} src={value.download_url} className={`${CurrentSlide === index ? "block" : "hidden"} rounded shadow-lg shadow-amber-800 h-full w-full`} alt="" />;
          })
        : null}
        <BsArrowRightCircleFill size={40} className=" absolute right-1" onClick={handleNext}/>
        <span className="flex absolute bottom-1 ">
          {
            Image.map((_,index)=>{
             
              return <button key={index} className={`${ CurrentSlide === index ? 'bg-white' : "bg-slate-500" } h-2 w-2 rounded-full mx-1`} onClick={()=>setCurrentSlide(index)}></button>
            })
            
          }
        </span>
        </div>
        </div>
    </>
  );
};

export default ImageSidler;
