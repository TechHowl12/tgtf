import React from 'react';
import bannerMobile from "../images/banner-mobile.webp"
import bannerDesktop from "../images/banner-desktop.webp"
import Image from 'next/image';
import Logo from "../images/logo.webp"
import Frames from '../components/Home/Frames';

const page = () => {
    return (
        <main>

            <section style={{
                "--mobileBG": `url(${bannerMobile.src})`,
                "--desktopBG": `url(${bannerDesktop.src})`
            }} className="hero-bg w-full bg-cover relative bg-center h-[698px] -z-20">
                <div className="absolute inset-0 bg-black/50 -z-10"></div>
                <Image src={Logo} width={224} height={369} className='flex pt-[30%] pl-5 mx-auto' alt='TGTF Logo' />
                <h1 className='text-bright px-6 absolute bottom-24'>India’s foremost <span className='font-bold'>celebration of travel</span></h1>
                <p className='mt-5 px-6 text-white absolute bottom-6'>Here, travellers, creators, brands, and destinations meet face-to-face to share experiences that spark discovery — of new cuisine, cultures, and stories.</p>
            </section>

            <section className='bg-white'>
                <div className='bg-pink w-full h-7'></div>
                <div className='px-6'>
                    <h1 className='text-blue mt-8 mb-3'><span className='font-bold'>Story</span> Behind TGTF</h1>
                    <p>
                        As travellers, we live for the thrill of discovery. But what stays with us long after the trip ends isn’t just the destination. It’s the rush of new places, the people we meet, the moments that make time slow down, and the constant pursuit of making the most of every second.<br /><br />
                        This feeling is what keeps us moving. And we knew there were countless others across India who felt it too.<br /><br />
                        That is why The Gypsy Travel Festival was born. By travellers, for travellers.
                    </p>
                    <div className='bg-purple text-white curve p-5 mt-8'>
                        <h1>OUR <span className='font-bold'>PURPOSE</span></h1>
                        <p className='mt-2'>is to connect India’s travel community through experiences that inspire action. TGTF bridges the gap between inspiration and exploration.</p>
                    </div>
                    <div className='bg-red text-white curve p-5 mt-3 mb-8'>
                        <h1>OUR <span className='font-bold'>VISION</span></h1>
                        <p className='mt-2'>is to make TGTF India’s most trusted destination for travel experience and community building. A festival that explores every side of travel, from the where to the why.</p>
                    </div>
                </div>
            </section>
            
            <Frames/>

        </main>
    )
}

export default page
