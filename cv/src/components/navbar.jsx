import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import {HiMenuAlt3 } from 'react-icons/hi'

const Navbar=()=>{

    // useEffect(()=>{
    //     gsap.registerPlugin(ScrollTrigger)

    //     gsap.fromTo('.navbar', {y:'-200px', opacity:0}, {y:0, opacity:1, duration:.5})
    // }, [])

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
        {
            title: 'projekty',
            link: 'projects'
        },
    ]

    const [activeNavbar, setNavbar] = useState('navbar')
    const toggleNavbar = () => {
        activeNavbar === 'navbar' ? setNavbar('navbar activeNavbar') : setNavbar('navbar');
    }

    const [activeIcon, setIcon] = useState('icon')
    const icon =()=>{
        activeIcon === 'icon' ? setIcon('icon activeIcon') : setIcon('icon');
    }

    return(
       <>
        <div className="w-[30px] z-[99] fixed top-[1%] right-[1%] md:hidden" onClick={toggleNavbar}>
            <div className={activeIcon} onClick={icon}>
                <div className="line item-1 my-[6px]"></div>
                <div className="line item-2 my-[6px]"></div>
                <div className="line item-3 my-[6px]"></div>
            </div>
        </div>

    <div className={`fixed top-0 right-[-100%] md:right-0 navbar bg-black w-[60%] md:rounded-bl-[30px] md:w-fit text-center z-[10] ${activeNavbar}`}>
    <ul className="md:flex h-screen md:h-fit relative mt-[60%] md:mt-0">
        {navElements.map((element, i)=>{
            return(
                <li key={i} className="text-white cursor-pointer mx-[20px] px-[25px] py-[8px] rounded-full text-[25px] group hover:text-[#1282f1] transition-all duration-300">
                <Link to={element.link} smooth={true} className=" font-gruppo font-bold">{element.title} <div className="w-[10px] h-[10px] bg-[#1282f1] rounded-full mx-auto group-hover:w-full group-hover:h-[6px]  transition-all duration-300"></div></Link></li>
            )
        })}
    </ul>
</div></>
    )
}

export default Navbar;