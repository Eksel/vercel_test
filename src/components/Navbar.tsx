import React from 'react'
import { MdLocalPostOffice } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import Link from 'next/link';
import { MdOutlineCreate } from "react-icons/md";

export default function Navbar() {
  return (
    <header className='w-full flex flex-row justify-between items-center p-3 text-xl font-bold shadow-md '>
        <Link href="/">
            <div className="p-3 rounded-md hover:bg-black hover:text-white hover:cursor-pointer  transition-colors logo flex flex-row justify-center items-center ">
                
                <div className='icon mx-1 text-2xl'>
                    <MdLocalPostOffice/>
                </div>
                <h1 className='mx-1'>
                    Home
                </h1>
            </div>
        </Link>
        
        <div className="buttons flex flex-row">
            <div className="login mx-1">
                <Link href="/login">
                    <button className="flex flex-row justify-center items-center p-3 rounded-md hover:bg-black hover:text-white  transition-colors ">
                        <div className='icon mx-1 text-2xl'>
                            <IoMdLogIn/>
                        </div>
                        <h1 className=''>
                            Login
                        </h1>
                        
                    </button>
                </Link>
                
                
            </div>
            <div className='singin mx-1'>
                <Link href="/sign">
                    <button className="flex flex-row justify-center items-center p-3 rounded-md hover:bg-black hover:text-white  transition-colors ">
                        <div className='icon mx-1 text-2xl'>
                            <MdOutlineCreate/>
                        </div>
                        <h1 className=''>
                            Sign up
                        </h1>
                        
                    </button>
                </Link>
            </div>
        </div>
    </header>
  )
}
