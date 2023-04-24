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
            <div className="w-full h-[10px] bg-[#DAA520]"></div>
        <div id='skills' className="exp bg-white py-[50px]">
            <div className="flex text-center align-middle justify-center mx-auto">
            <h1 className="text-[55px] font-gruppo font-extrabold"> UMIEJĘTNOŚCI</h1></div>
            
            <div className="grid grid-cols-2">
            <div className="ml-[10%]">
               <ul>
                {skills.map((skill, i)=>{
                   return(
                    <li key={i} className="flex my-[10px]"><GiPlainSquare className="mt-[6px] mx-[10px]"/><span className="text-[20px] font-gruppo font-bold">{skill.element}</span></li>
                   )
                })}
                </ul>
            </div>
           <HorizontalBlocks className=" justify-end absolute right-0"/>
            </div>
            
        </div>
        
        <div className="w-full h-[10px] bg-[#000000]"></div>
        </div>
    )
}

export default Experience;