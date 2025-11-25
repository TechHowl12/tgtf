import React from 'react';
import bannerMobile from "../images/banner-mobile.webp"
import bannerDesktop from "../images/banner-desktop.webp"
import Frames from '../components/Home/Frames';

const page = () => {
    return (
        <main>

            <section style={{
                "--mobileBG": `url(${bannerMobile.src})`,
                "--desktopBG": `url(${bannerDesktop.src})`
            }} className="hero-bg w-full bg-cover relative bg-center h-[698px] -z-20">
                <div className='absolute bottom-0 py-6 px-6 xl:px-14 bg-black/20 w-full'>
                    <h1 className='text-bright'>India’s foremost <span className='font-bold'>celebration of travel</span></h1>
                    <p className='mt-5 text-white xl:w-1/2'>Here, travellers, creators, brands, and destinations meet face-to-face to share experiences that spark discovery — of new cuisine, cultures, and stories.</p>
                </div>
            </section>

            <section className='bg-white pb-10 xl:pb-14'>
                <div className='bg-pink w-full h-7'></div>
                <div className='px-6 xl:px-14 flex flex-col lg:flex-row items-center'>
                    <div>
                        <h1 className='text-blue mt-8 xl:mt-14 mb-3'><span className='font-bold'>Story</span> Behind TGTF</h1>
                        <p className='w-full xl:w-10/12'>
                            As travellers, we live for the thrill of discovery. But what stays with us long after the trip ends isn’t just the destination. It’s the rush of new places, the people we meet, the moments that make time slow down, and the constant pursuit of making the most of every second.<br /><br />
                            This feeling is what keeps us moving. And we knew there were countless others across India who felt it too.<br /><br />
                            That is why The Gypsy Travel Festival was born. By travellers, for travellers.
                        </p>
                    </div>
                    <div>
                        <div className="relative mt-8 xl:mt-14 isolate">
                            {/* offset layer behind */}
                            <div
                                className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-[#670BA6] -z-10"
                                aria-hidden="true"
                            />

                            {/* card */}
                            <div className="relative rounded-2xl border-2 border-[#670BA6] bg-white p-5">
                                <h1 className='text-purple'>OUR <span className="font-bold">PURPOSE</span></h1>
                                <p className="mt-2 text-purple">
                                    is to connect India’s travel community through experiences that inspire action.
                                    TGTF bridges the gap between inspiration and exploration.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-8 isolate">
                            {/* offset layer behind */}
                            <div
                                className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-[#ED1C24] -z-10"
                                aria-hidden="true"
                            />

                            {/* card */}
                            <div className="relative rounded-2xl border-2 border-[#ED1C24] bg-white p-5">
                                <h1 className="text-[#ED1C24] text-2xl tracking-wide">
                                    OUR <span className="font-bold">VISION</span>
                                </h1>
                                <p className="mt-2 text-[#ED1C24]">
                                    is to make TGTF India’s most trusted destination for travel experience and community building.
                                    A festival that explores every side of travel, from the where to the why.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default page
