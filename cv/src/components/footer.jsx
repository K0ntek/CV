import React from "react";
import {BsFillTelephoneFill, AiOutlineMail, BsFacebook, BsGithub} from 'react-icons/all'
import Navbar from "./navbar";

const Footer=()=>{
    return(
       <div>
         <div className="footer bg-[#050505] py-[50px]">
            <div className="text-white text-center py-[10px] space-y-[20px]">
            <h1 className=" text-[40px] lg:text-[70px] font-orbitron">JAKUB KONTEK</h1>
                    <div className="w-fit mx-auto">
                            <h2 className="text-[35px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#4702a0] to-[#1282f1]">FRONT-END DEVELOPER</h2>
                            <div className="w-[50%] h-[4px] bg-[#4702a0] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200"></div>
                    </div>
            </div>
            <div className="flex space-x-[10px] text-white py-[5px] justify-center">
                <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] hover:text-[#1282f1] transition-all duration-300"/></a>
                <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] hover:text-[#1282f1] transition-all duration-300"/></a>
            </div>
        </div>
        <div className="bg-black text-white text-[20px] text-center py-[20px] sm:flex space-y-[15px] md:space-y-0 space-x-[40px] justify-center">
           <p className="font-orbitron"> 790 839 086</p>

            <p className="font-orbitron">jakub.kontek05@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer;