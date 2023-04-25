import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const VerticalBlocks=()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.element', {y:'-100%', opacity:0}, {y:0,opacity:1, duration:.5, stagger:.3, scrollTrigger:{trigger:'.elements', start:'top 40%'}})
    },[])
    return(
        <div className="elements xl:grid grid-cols-4 w-full overflow-hidden hidden">
            <div className="element w-full mx-auto h-[80%] bg-gradient-to-t from-[#1a290b] to-black"></div>
            <div className="element w-full mx-auto h-[70%] bg-gradient-to-t from-white to-black"></div>
            <div className="element w-full mx-auto h-[90%] bg-gradient-to-t from-[#160b46]  to-black"></div>
            <div className="element w-full mx-auto h-[60%] bg-gradient-to-t from-[#afd7ff] to-black"></div>
        </div>
    
    )
}


export default VerticalBlocks;