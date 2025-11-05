import React from 'react';
import Threads from "../images/threads.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import x from "../images/x.png";
import Youtube from "../images/youtube.png";
import Whatsapp from "../images/whatsapp.png";
import Linkedin from "../images/linkedin.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#242424] py-8 flex flex-col justify-center items-center gap-y-20'>
            <h1 className='text-white'><span className='font-bold'>Join</span> India's foremost<br/> celebration of travel</h1>
            <div className='flex items-center gap-x-4'>
                <Image src={Threads.src} width={34} height={34} alt="Threads" />
                <Image src={Instagram.src} width={34} height={34} alt="Instagram" />
                <Image src={Facebook.src} width={34} height={34} alt="Facebook" />
                <Image src={x.src} width={34} height={34} alt="X" />
                <Image src={Youtube.src} width={34} height={34} alt="Youtube" />
                <Image src={Whatsapp.src} width={34} height={34} alt="Whatsapp" />
                <Image src={Linkedin.src} width={34} height={34} alt="Linkedin" />

            </div>
        </div>
    )
}

export default Footer
