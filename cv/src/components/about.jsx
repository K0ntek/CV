import React from "react";
import VerticalBlocks from "./vertical";

import {CgProfile, MdCastForEducation, AiOutlineProfile} from 'react-icons/all'

const About =()=>{
    return(
        <>
        <div className="w-full h-[150px] mt-[5px] bg-gradient-to-t from-black to-transparent"></div>
        <div id='about' className="bg-black h-fit py-[50px] xl:grid grid-cols-[35%_65%] z-[99]">
            <VerticalBlocks />

                <div className=" w-full xl:w-[80%] p-[20px] text-white xl:ml-[20%]">
                    <div className="my-[10%] element">
                    <CgProfile className="text-[50px] mt-[-10px] text-[#45a2ff] mx-[10px]"/>
                        <h1 className="text-[35px] sm:text-[60px] font-gruppo font-extrabold sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#4f28ff] to-[#a692ff]">O MNIE</h1>

                        <p className="text-[20px] text-justify w-[80%] mx-auto">Początkujący Front-end Developer w tworzeniu stron internetowych ubiegający o staż na tym stanowisku.
                            Ambitny, komunikatywny, punktualny, dobrze pracujący w zespole. Specjalizuję się w tworzeniu intuicyjnych,
                            responsywnych i łatwych w obsłudze interfejsów użytkownika, które poprawiają doświadczenie użytkownika.
                            Jestem zmotywowany i chętny do dalszego rozwoju w tej dziedzinie.</p>
                    </div>
                        <div className="my-[10%] element" >
                        <MdCastForEducation className="text-[50px] mt-[-10px] text-[#45a2ff] mx-[10px]"/>
                        <h1 className="text-[35px] sm:text-[60px] font-gruppo font-extrabold sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#4f28ff] to-[#a692ff]">WYKSZTAŁCENE</h1>
                            <div className="text-[20px] text-justify w-[80%] mx-auto">
                                <p className=" font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#45a2ff] to-[#1282f1]">09.2020 - obecnie</p>
                                <p>Zespół Szkół Technicznych i Ogólnokształcących w Jarosławiu</p>
                            <div className="flex">
                            <p className="flex"><span className=" font-bold">Kierunek: </span></p>
                                <div><p><span className=" font-orbitron text-transparent text-white mx-[10px]">Programista</span></p>
                                <div className="mx-auto w-[69%] h-[3px] bg-gradient-to-r from-[#45a2ff] to-[#1282f1] rounded-full"></div></div>
                            </div>
                            </div>
                        </div>
                    <div className="my-[10%] element">
                    <AiOutlineProfile className="text-[50px] mt-[-10px] text-[#45a2ff] mx-[10px]"/>
                    <h1 className="text-[35px] sm:text-[55px] font-gruppo font-extrabold sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#4f28ff] to-[#a692ff]">DOŚWIADCZENIE ZAWODOWE</h1>
                        <div className="text-[20px] text-justify w-[80%] mx-auto">
                            <p className=" font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#45a2ff] to-[#1282f1]">03.2023 </p>
                            <p className="text-[20px] text-justify mx-auto">Stworzenie strony internetowej na dni otwarte szkoły pod kątem wizualnym</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default About;