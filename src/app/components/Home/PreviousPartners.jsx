import React from 'react';
import ponant from "../../images/ponant.webp"
import saudi from "../../images/saudi.webp"
import qatar from "../../images/qatar.webp"
import seychelles from "../../images/seychelles.webp"
import utah from "../../images/utah.webp"
import clubmed from "../../images/club-med.webp"
import Image from 'next/image';

const PreviousPartners = () => {
    return (
        <div className='bg-white p-8'>
            <div className='bg-pink rounded-[10px] pb-2 w-[319px] mx-auto'>
                <div className='p-8'>
                    <h1 className='text-white'>The <br /><span className='font-bold'>Curators</span> Of<br /> The Collective</h1>
                    <p className='bg-white text-pink w-[111px] h-[18px] flex-center rounded-xs mt-3'>Previous Partners</p>
                </div>
                <div className='bg-white rounded-[10px] grid grid-cols-2 place-items-center h-[324px] overflow-y-auto gap-6 px-6 py-8 mx-1'>
                    <Image width={118} height={70} src={saudi.src} alt="Saudi Logo" />
                    <Image width={95} height={70} src={seychelles.src} alt="Seychelles Logo" />
                    <Image width={101} height={55} src={qatar.src} alt="Qatar Logo" />
                    <Image width={134} height={66} src={utah.src} alt="Utah Logo" />
                    <Image width={102} height={20} src={clubmed.src} alt="Club Med Logo" />
                    <Image width={112} height={62} src={ponant.src} alt="Ponant Logo" />
                    <Image width={118} height={70} src={saudi.src} alt="Saudi Logo" />
                    <Image width={95} height={70} src={seychelles.src} alt="Seychelles Logo" />
                    <Image width={101} height={55} src={qatar.src} alt="Qatar Logo" />
                    <Image width={134} height={66} src={utah.src} alt="Utah Logo" />
                    <Image width={102} height={20} src={clubmed.src} alt="Club Med Logo" />
                    <Image width={112} height={62} src={ponant.src} alt="Ponant Logo" />
                </div>
            </div>
        </div>
    )
}

export default PreviousPartners
