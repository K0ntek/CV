import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import viteReact from '/vite-react.png'
import dni from '/dni.png'
import kwt from '/kwt.png'

const Projects =()=>{
    const projectNav=[
        {
            img: viteReact,
            link: 'https://project1-7qx9.onrender.com',
            title: ' DESIGN'
        },
        {
            img: dni,
            link: 'https://project2-fp6r.onrender.com',
            title: 'DNI OTWARTE',
        },
        {
            img: kwt,
            link: 'https://project3-nf09.onrender.com',
            title: 'KWT',
        },
    ]

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.project', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2, scrollTrigger:{trigger:'.projects', start:'top 40%'}})
        gsap.fromTo('.projectTitle', {x:'-200px', opacity:0}, {x:0, opacity:1, duration:.5, scrollTrigger:{trigger:'.projects', start:'top 40%'}})
        gsap.fromTo('.projectBorder', {width:'8px', opacity:0}, {width:'40%', opacity:1, duration:.5, delay:.3, scrollTrigger:{trigger:'.projects', start:'top 40%'}})

    },[])

    return(
        <div className=" py-[100px] bg-[#000000]">
        <div className="projects w-[90%] grid md:grid-cols-2 mx-auto gap-y-[40px]">
            <div className="projectTitle mx-auto my-auto text-center sm:w-[60%] space-y-[30px]">
                <div className="w-fit mx-auto ">
                    <h1 className=" text-[40px] lg:text-[60px] font-orbitron"><span className="text-[80px] lg:text-[120px] font-orbitron">MOJE</span><br/>PROJEKTY</h1>

                    <div className="projectBorder w-[40%] h-[8px] bg-gradient-to-r from-[#ffffff] to-black rounded-full mx-auto"></div>
                </div>
            </div>

                {projectNav.map((element, i)=>{
                    return(
                            <a href={element.link}>
                                <div className="project group rounded-3xl relative overflow-hidden border-[2px] w-[95%] md:w-[80%] my-auto border-gray-500 mx-auto">
                                   <div className="group-hover:scale-125 transition-all duration-300">
                                   <div style={{background: `linear-gradient(80deg, rgba(0,0,0,.1), black),url(${element.img})`,
                                        aspectRatio:'16/9',
                                        backgroundRepeat:'no-repeat',
                                         backgroundSize:'cover'}}>
                                    
                                    <div className="group-hover:bg-black/90 w-full h-full z-40 transition-all">
                                        <div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[50%] translate-y-[-45%] lg:translate-y-[-15%] transition-all duration-300 delay-50">
                                            <div className="w-fit opacity-0 group-hover:opacity-100">
                                                <h2 className=" text-[25px] md:text-[25px] xl:text-[30px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#4702a0] to-[#1282f1]">{element.title}</h2>
                                                <div className="w-[4px] h-[4px] bg-[#4702a0] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </a>
                    )
                })}
        </div>
        </div>
    )
}

export default Projects;