import React from 'react';
import Frame1 from "../../images/frame-1.webp";
import Frame2 from "../../images/frame-2.webp";
import Frame3 from "../../images/frame-3.webp";
import Frame4 from "../../images/frame-4.webp";
import Frame5 from "../../images/frame-5.webp";
import DFrame1 from "../../images/d-frame-1.webp";
import DFrame2 from "../../images/d-frame-2.webp";
import DFrame3 from "../../images/d-frame-3.webp";
import DFrame4 from "../../images/d-frame-4.webp";
import Image from 'next/image';

const Frames = () => {
    return (
        <section className='bg-orange px-4 pt-10 pb-20'>
            <h1 className='text-white block mb-6 w-[324px] mx-auto sm:hidden'>TGTF in <br /><span className='font-bold'>frames</span></h1>

            <div className='sm:hidden grid grid-cols-2 mx-auto justify-items-center w-[324px]'>
                <div className="w-[154px] h-[217px] overflow-hidden">
                    <Image src={Frame1.src} width={154} height={217} alt="Frame 1" className="w-full h-full object-cover rounded-md" />
                </div>

                <div className="w-[154px] h-[189px] overflow-hidden">
                    <Image src={Frame2.src} width={154} height={189} alt="Frame 2" className="w-full h-full object-cover rounded-md" />
                </div>

                <div className="w-[154px] h-[153px] overflow-hidden relative top-3">
                    <Image src={Frame3.src} width={154} height={153} alt="Frame 3" className="w-full h-full object-cover rounded-md" />
                </div>

                <div className="w-[154px] h-[179px] overflow-hidden relative bottom-4">
                    <Image src={Frame4.src} width={154} height={179} alt="Frame 4" className="w-full h-full object-cover rounded-md" />
                </div>

                <div className="w-[316px] h-[154px] col-span-2 overflow-hidden mx-auto">
                    <Image src={Frame5.src} width={316} height={154} alt="Frame 5" className="w-full h-full object-cover rounded-md" />
                </div>
            </div>

            <section className='hidden sm:flex flex-col items-center '>

                <h1 className='text-white mb-6'>TGTF in <span className='font-bold'>frames</span></h1>

                <div className="hidden sm:flex">

                    {/* LEFT BIG IMAGE */}
                    <div className="relative group mr-3">
                        <Image src={DFrame1} width={565} height={425} alt="..." className="transition-transform duration-300 group-hover:scale-[1.01]" />
                        <div className="absolute inset-0 bg-black/30 cursor-pointer rounded-2xl opacity-0 scale-[1.01] group-hover:opacity-100 text-white flex items-center justify-center text-xl font-bold transition-all duration-300">
                            <p className='bg-pink text-white rounded-xs px-2'>SEE MORE</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>

                        <div className="relative group">
                            <Image src={DFrame2} width={565} height={212} alt="..." className="transition-transform duration-300 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-black/30 cursor-pointer rounded-2xl opacity-0 scale-[1.01] group-hover:opacity-100 text-white flex items-center justify-center text-xl font-bold transition-all duration-300">
                                <p className='bg-pink text-white rounded-xs px-2'>SEE MORE</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <Image src={DFrame3} width={565} height={200} alt="..." className="transition-transform duration-300 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-black/30 cursor-pointer rounded-2xl opacity-0 scale-[1.01] group-hover:opacity-100 text-white flex items-center justify-center text-xl font-bold transition-all duration-300">
                                <p className='bg-pink text-white rounded-xs px-2'>SEE MORE</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM FULL WIDTH IMAGE */}
                <div className="relative group mt-3">
                    <Image src={DFrame4} width={1144} height={605} alt="..." className="transition-transform duration-300 group-hover:scale-[1.01]" />
                    <div className="absolute inset-0 bg-black/30 cursor-pointer rounded-2xl opacity-0 scale-[1.01] group-hover:opacity-100 text-white flex items-center justify-center text-xl font-bold transition-all duration-300">
                        <p className='bg-pink text-white rounded-xs px-2'>SEE MORE</p>
                    </div>
                </div>

            </section>

        </section>
    )
}

export default Frames
