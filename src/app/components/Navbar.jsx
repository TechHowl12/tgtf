import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-[#242424] py-3'>
                <h1 className='text-bright ml-4 font-bold'>#TGTF</h1>
            </nav>
            <div className="overflow-hidden whitespace-nowrap bg-white text-blue py-3">
                <div className="marquee">
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
                </div>
            </div>


        </>
    )
}

export default Navbar
