import Image from "next/image";
import Explore from "../../images/explore.webp";
import Star2 from "../../images/star.svg";
import Shine from "../../images/shine.svg";
import Dots from "../../images/four-dots.svg";
import Flower from "../../images/flower.svg";

const ExploreCarousel = () => {
    return (
        <div className="bg-white py-10">
            <h1 className="text-blue mx-6 mb-8">Helping Indians travel <span className="font-bold">smarter, better, and farther</span></h1>
            <div className="relative w-[319px] h-[444px] mx-auto">
                <Image width={319} height={444} src={Explore} alt="Explore Carousel" className="mx-auto relative z-10" />
                <div className="absolute bottom-4 left-4 z-10">
                    <strong className="bg-pink text-white rounded-[5px] py-1 px-2 text-[21px]">EXPLORE</strong>
                    <p className="text-white mt-3">some of the most sought after travel<br /> destinations, cultural, and cuisines from around<br /> the world.</p>
                </div>
                <Image src={Star2} alt="Star Icon" className="absolute bottom-18 -left-7 z-0" />
                <Image src={Shine} alt="Shine Icon" className="absolute top-20 -right-5 z-20" />
                <Image src={Dots} alt="Dots Icon" className="absolute -top-5 -left-5 z-0" />
                <Image src={Flower} alt="Flower Icon" className="absolute -bottom-6 -right-7 z-20" />
            </div>
        </div>
    )
}

export default ExploreCarousel
