import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar=()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.navbar', {y:'-200px', opacity:0}, {y:0, opacity:1, duration:.5})
    })

    const navElements = [
        {
            title: 'banner',
            link: 'home'
        },
        {
            title: 'o mnie',
            link: 'about'
        },
        {
            title: 'umiejętności',
            link: 'skills'
        },
    ]

    return(
        <div className="fixed top-0 right-0 navbar bg-black z-[99]">
            <ul className="flex">
                {navElements.map((element, i)=>{
                    return(
                        <li key={i} className="text-white cursor-pointer mx-[20px] px-[25px] py-[8px] rounded-full text-[25px] group hover:text-[#4f28ff] transition-all duration-300">
                        <Link to={element.link} smooth={true} className=" font-gruppo font-bold">{element.title} <div className="w-[10px] h-[10px] bg-[#4f28ff] rounded-full mx-auto group-hover:w-full group-hover:h-[6px]  transition-all duration-300"></div></Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar;