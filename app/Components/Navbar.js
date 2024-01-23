'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const [Open, setOpen] = useState(false)
  const handleClick = () =>{
    setOpen(!Open)
  }
  return (
    <>
      <nav className=" relative flex justify-around pt-3 w-full">
        <h1 className="text-3xl font-bold text-slate-100">Codax_Projects</h1>
        <div className=" select-none" onClick={handleClick}>
        {!Open ? <GiHamburgerMenu size={40} /> : <IoCloseSharp size={40} />}
        </div>

        <ul className={`absolute flex flex-col lg:right-[19rem] top-16 ${!Open ? 'hidden' : 'block'}`}>
          <li onClick={()=>{setOpen(!Open);router.push("/")}} className="font-semibold text-lg mx-2">
            Home
          </li>
          <li onClick={()=>{setOpen(!Open);router.push("/Multi")}} className="font-semibold text-lg mx-2">
            Multi
          </li>
          <li onClick={()=>{setOpen(!Open);router.push("/Rating")}} className="font-semibold text-lg mx-2">
          Rating
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
