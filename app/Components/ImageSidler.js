"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSidler = (props) => {
  const [Image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [MsgError, setMsgError] = useState(false);

  useEffect(() => {
    if (props.url !== null) {
      ImageLoad(props.url);
    }
  }, [props.url]);

  const ImageLoad = async (url) => {
    try {
      setLoading(true)
      const reopens = await fetch(url);
      const data = await reopens.json();
      console.log(data)
      if (data) {
        setImage(data);
      }
      setLoading(false)
    } catch (err) {
      setMsgError(err.message);
      setLoading(false)
    }
  };
  if(loading){
    return <div>Data Loading  | Please Wait.....!</div>
  }
  if(MsgError){
    return <div>{MsgError.err}</div>
  }
  return (
    <>{/* <button onClick={()=>ImageLoad(props.url)}>Click me</button> */}</>
  );
};

export default ImageSidler;
