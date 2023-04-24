import React from "react";
import {BsFillTelephoneFill, AiOutlineMail, BsFacebook, BsGithub} from 'react-icons/all'
import Navbar from "./navbar";

const Footer=()=>{
    return(
       <div>
         <div className="bg-[#050505] py-[50px]">
            <div className="text-white text-center py-[10px]">
                <h1 className="text-[40px] font-gruppo">JAKUB KONTEK</h1>
                <p className="text-[20px] font-gruppo w-[40%] mx-auto text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti ex quibusdam esse eius aut, quia a quaerat eaque neque illo corrupti placeat minima autem nihil eum amet nesciunt doloremque.</p>
            </div>
            <div className="flex space-x-[10px] text-white py-[5px] justify-center">
                <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] hover:text-[#522ff0] transition-all duration-300"/></a>
                <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] hover:text-[#522ff0] transition-all duration-300"/></a>
            </div>
        </div>
        <div className="bg-black text-white text-[20px] text-center py-[20px] flex space-x-[40px] justify-center">
           <p className="font-orbitron"> 790 839 086</p>

            <p className="font-orbitron">jakub.kontek05@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer;