import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';

import {BsFillTelephoneFill, AiOutlineMail, BsFacebook, BsGithub} from 'react-icons/all'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import HorizontalBlocks from "./horizontal";

const Header=()=>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.selfImage', {x:'200px', opacity:0}, {x:0, opacity:1, duration:.5})
        gsap.fromTo('.name', {y:'100px', opacity:0}, {y:0, opacity:1, duration:.5})
    })

    return(
        <div id='home' className="header min-h-screen grid grid-cols-2">
            <div className=" relative top-[50%] translate-y-[-20%] mx-auto w-[70%]">
            <h1 className="name text-[70px] font-orbitron uppercase">Jakub Kontek</h1>
            <TypeAnimation
                sequence={[
                    'Programista',
                    2000,
                    'Front-end developer',
                    2000
                ]}
                speed={50}
                repeat={Infinity}
                className="font-orbitron text-[55px] text-transparent bg-clip-text bg-gradient-to-r from-[#3c19d4] to-[#522ff0] w-[30%]"
            />
            <div className="flex text-[20px] my-[10px]"><BsFillTelephoneFill className="contactIcon"/>
            <p className="font-orbitron"> 
             <CountUp end={790} className=" font-orbitron"/>  
             <CountUp end={839} prefix=" "  suffix=" " className=" font-orbitron"/> 
             0<CountUp end={86} className=" font-orbitron"/></p></div>

            <div className="flex text-[20px] my-[10px]"><AiOutlineMail className="contactIcon"/>
            <TypeAnimation sequence={['jakub.kontek05@gmail.com', 2000]} className="font-orbitron"/></div>
            
            <div className="flex space-x-[10px] mt-[10px]">
                <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] text-[#000000] hover:text-[#522ff0] transition-all duration-300"/></a>
                <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] text-[#000000] hover:text-[#522ff0] transition-all duration-300"/></a>
            </div>
            </div>
            <img src="image.jpg" className="selfImage my-auto" alt="image"/>
            <div className="w-full h-[60px] bg-gradient-to-t from-black to-transparent absolute bottom-0"></div>
        </div>
    )
}

export default Header;