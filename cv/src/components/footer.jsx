import React from "react";
import {BsFillTelephoneFill, AiOutlineMail, BsFacebook, BsGithub} from 'react-icons/all'
import Navbar from "./navbar";
import { TypeAnimation } from "react-type-animation";

const Footer=()=>{
    return(
       <div>
        <div className="w-full h-[10px] bg-gradient-to-r from-[#1b003d] to-[#42088f] "></div>
         <div className="footer bg-[#05010a] py-[50px]">
            <div className="text-white text-center py-[10px] space-y-[20px]">
            <h1 className=" text-[40px] lg:text-[70px] font-orbitron">JAKUB KONTEK</h1>
                    <div className="w-fit mx-auto">
                                <TypeAnimation
                            sequence={[
                                'Front-end developer',
                                3000,
                                '',
                                100
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-[35px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#4702a0] to-[#1282f1]"
                        />

                            {/* <h2 className="text-[35px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#4702a0] to-[#1282f1]">FRONT-END DEVELOPER</h2> */}
                            <div className="w-[50%] h-[4px] bg-[#4702a0] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200"></div>
                    </div>
            </div>
            <div className="flex space-x-[10px] text-white py-[5px] justify-center">
                <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] hover:text-[#1282f1] transition-all duration-300"/></a>
                <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] hover:text-[#1282f1] transition-all duration-300"/></a>
            </div>
        </div>
        <div className="bg-[#05010a] text-white text-[20px] text-center py-[20px] sm:flex space-y-[15px] md:space-y-0 space-x-[40px] justify-center">
           <p className="font-orbitron"> 790 839 086</p>

            <p className="font-orbitron">jakub.kontek05@gmail.com</p>
            </div>
           <div className="bg-black">
           <p className="w-[80%] mx-auto text-[14px] text-white font-gruppo font-bold">Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie
                z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).</p>
           </div>
        </div>
    )
}

export default Footer;