import React from 'react';
import Frame1 from "../../images/frame-1.webp";
import Frame2 from "../../images/frame-2.webp";
import Frame3 from "../../images/frame-3.webp";
import Frame4 from "../../images/frame-4.webp";
import Frame5 from "../../images/frame-5.webp";
import Image from 'next/image';

const Frames = () => {
    return (
        <div className='bg-orange px-4 py-10'>
            <h1 className='text-white mb-6 w-[324px] ml-auto'>TGTF in <br /><span className='font-bold'>frames</span></h1>
            <div className='grid grid-cols-2 mx-auto justify-items-center w-[324px]'>
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

        </div>
    )
}

export default Frames
