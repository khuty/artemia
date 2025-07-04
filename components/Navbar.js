
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
useState



export default function Navbar () {
    const [menuOpen,setMenuOpen] =useState(false);
    const toggleMenu = () => {
        setMenuOpen (!menuOpen);

    }

    return(
        <main className="bg-white shadow shadow-gray-300 w-full">
            <div className="flex justify-between h-[50px] pt-3 px-5">
                <p className="text-blue-500 font-bold text-2xl">Artemia</p>
                <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard/products">Products</Link></li>
                    <li><Link href="/dashboard/create-task">create-tasks</Link></li>
                    <li><Link href="/dashboard/add-products"></Link>Add-product</li>
                    <li><Link href="/dashboard/profile">Profile</Link></li>
                </ul>
                <p className="hidden md:block h-[35px] w-[80px] bg-blue-400 text-white text-center rounded-lg"><Link href="/auth/signin"></Link>Login</p>
                <div className="block py-2 md:hidden">
                <FaGripLines className="text-2xl text-blue-500" 
                onClick={toggleMenu}/>
            </div>
            </div>
            {menuOpen && ( 

            <div className="px-5 pb-1 md:hidden">
                <ul>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Project</li>
                    <li>Profile</li>
                </ul>
                <p className="mt-2 w-[60px] h-[25px] bg-blue-500 text-center"><Link href="/auth/signin"></Link>Login</p>
            </div>
             )}
            


        </main>
    )
}