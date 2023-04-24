import React, { useDeferredValue } from "react";
import VerticalBlocks from "./vertical";

import {CgProfile, MdCastForEducation, AiOutlineProfile} from 'react-icons/all'

const About =()=>{
    return(
        <div id='about' className="bg-black h-fit py-[50px] grid grid-cols-[35%_65%] z-[99]">
            <VerticalBlocks/>

                <div className="w-[80%] p-[20px] text-white ml-[20%]">
                <div className="my-[10%] element">
                    <div className="flex"><h1 className="text-[60px] font-gruppo text-transparent bg-clip-text bg-gradient-to-r from-[#4f28ff] to-[#a692ff]">O MNIE</h1>
                    <CgProfile className="text-[40px] mt-[-10px] text-[#e4b235] mx-[10px]"/></div>

                    <p className="text-[20px] text-justify w-[80%] mx-auto">Początkujący Front-end Developer w tworzeniu stron internetowych ubiegający o staż na tym stanowisku.
                        Ambitny, komunikatywny, punktualny, dobrze pracujący w zespole. Specjalizuję się w tworzeniu intuicyjnych,
                        responsywnych i łatwych w obsłudze interfejsów użytkownika, które poprawiają doświadczenie użytkownika.
                        Jestem zmotywowany i chętny do dalszego rozwoju w tej dziedzinie.</p>
                </div>
                <div className="my-[10%] element" >
                <div className="flex"><h1 className="text-[60px] font-gruppo text-transparent bg-clip-text bg-gradient-to-r from-[#4f28ff] to-[#a692ff]">WYKSZTAŁCENE</h1>
                    <MdCastForEducation className="text-[40px] mt-[-10px] text-[#e4b235] mx-[10px]"/></div>
                    <div className="text-[20px] text-justify w-[80%] mx-auto">
                        <p className=" font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#e4b235] to-[#ff7213]">09.2020 - obecnie</p>
                        <p>Zespół Szkół Technicznych i Ogólnokształcących w Jarosławiu</p>
                       <div className="flex">
                       <p className="flex"><span className=" font-bold">Kierunek: </span></p>
                        <div><p><span className=" font-orbitron text-transparent text-white mx-[10px]">Programista</span></p>
                        <div className="mx-auto w-[69%] h-[3px] bg-[#755709] rounded-full"></div></div>
                       </div>
                    </div>
                </div>
                <div className="my-[10%] element">
                <div className="flex"><h1 className="text-[60px] font-gruppo text-transparent bg-clip-text bg-gradient-to-r from-[#4f28ff] to-[#a692ff]">DOŚWIADCZENIE ZAWODOWE</h1>
                    <AiOutlineProfile className="text-[40px] mt-[-10px] text-[#e4b235] mx-[10px]"/></div>
                    <div className="text-[20px] text-justify w-[80%] mx-auto">
                        <p className=" font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#e4b235] to-[#ff7213]">03.2023 </p>
                        <p className="text-[20px] text-justify mx-auto">Stworzenie strony internetowej na dni otwarte szkoły pod kątem wizualnym</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default About;