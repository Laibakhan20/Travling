"use client"
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'




const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div >
        <div className="flex relative z-10 justify-between items-center text-black py-6 px-8 md:px-32  drop-shadow-md border-b-2 border-black border-opacity-30">
            {/*logo*/}
            <div className="w-52 text-white text-2xl font-extrabold hover:scale-105 transition-all">Travling</div>
            {/*links*/}
            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                <li className="p-3 hover:bg-mylgBlue hover:text-mydarkblue rounded-md transition-all cursor-pointer text-white "><Link href={"/"}>Home</Link></li>
                <li className="p-3 hover:bg-mylgBlue hover:text-mydarkblue rounded-md text-white transition-all cursor-pointer"><Link href={"#"}>About</Link></li>
                <li className="p-3 hover:bg-mylgBlue hover:text-mydarkblue text-white rounded-md transition-all cursor-pointer"><Link href={"#"}>Contact</Link></li>
            </ul>

            <div className="relative hidden md:flex items-center justify-center gap-3">
                <Button className=" rounded-md bg-black hover:bg-mylgBlue hover:text-mydarkblue">Get Started</Button>
            </div>

            <div  className="xl:hidden block text-5xl cursor-pointer " >           
                <MenuIcon className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}></MenuIcon>
                <div className={`xl:hidden absolute top-24 left-0 w-full text-black bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"} `} style={{transition: "transform 0.3s ease, opacity 0.3s ease "}}>

                <ul>
                    <li className="list-none w-full text-center p-4 hover:bg-mydarkblue hover:text-white rounded-md transition-all"><Link href={"/"}>Home</Link></li>
                    <li className="list-none w-full text-center p-4 hover:bg-mydarkblue hover:text-white rounded-md transition-all"><Link href={"#"}>About</Link></li>
                    <li className="list-none w-full text-center p-4 hover:bg-mydarkblue hover:text-white rounded-md transition-all"><Link href={"#"}>Contact</Link></li>
                 </ul>

            </div>
            </div>

            
        </div>
        
    </div>
  )
}

export default Navbar