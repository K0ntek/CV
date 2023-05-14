import React from "react";
import {TbBulbFilled, GiPlainSquare} from 'react-icons/all'
import HorizontalBlocks from "./horizontal";
import VerticalBlocks from "./vertical";

const Experience =()=>{
    const skills =[
        {
            element: 'Bardzo dobra znajomość HTML, CSS3 oraz JavaScript'
        },
        {
            element: 'Bardzo dobra znajomość Tailwind.css'
        },
        {
            element: 'Dobra znajomość ReactJS'
        },
        {
            element: 'Doświadczenie w pracy z Bootstrap, JQuery oraz API'
        },
        {
            element: 'Znajomość systemów kontroli wersji, takich jak Git'
        },
        {
            element: 'Motywacja do ciągłego rozwoju w dziedzinie Front-endu'
        }
    ]
    return(
        <div>
            <div className="w-full h-[10px] bg-gradient-to-r from-[#002a55] to-[#42088f]"></div>
        <div id='skills' className="exp bg-[#dadada] py-[100px] pb-[150px]">
            <div className="flex text-center align-middle justify-center mx-auto">
            <h1 className="text-[35px] sm:text-[55px] font-gruppo font-extrabold"> UMIEJĘTNOŚCI</h1></div>
            
            <div className="md:grid grid-cols-2">
            <div className="ml-[10%]">
               <ul>
                {skills.map((skill, i)=>{
                   return(
                    <li key={i} className="flex my-[10px]"><GiPlainSquare className="mt-[6px] mx-[10px]"/><span className="text-[20px] font-gruppo font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d0142] to-[#063768]">{skill.element}</span></li>
                   )
                })}
                </ul>
            </div>
           <HorizontalBlocks className=" absolute right-0"/>
            </div>
            
        </div>
        
        {/* <div className="w-full h-[10px] bg-[#000000]"></div> */}
        </div>
    )
}

export default Experience;