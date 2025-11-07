import React from 'react';
import JioLogo from "../images/jio-logo.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav className='bg-[#242424] py-3 flex justify-between items-center px-4'>
                <p className='text-bright font-bold date'>7th & 8th feb 2026</p>
                <Image src={JioLogo} alt="Jio Logo" width={104} height={23.09} className='md:w-[135px]' />
            </nav>
            <div className="overflow-hidden whitespace-nowrap bg-white text-blue py-3">
                <div className="marquee">
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                </div>
                <div className="marquee" aria-hidden="true">
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                    <span className='marquee-text'>BUY TICKETS</span>
                </div>
            </div>


        </>
    )
}

export default Navbar
