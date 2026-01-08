import programmeImg from '../images/programme.webp';

const PROGRAMMES = {
    day1: [
        {
            id: 'd1-1',
            time: '02.30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Workshop',
            title: 'Vault To The Underwater',
            by: 'A workshop on basics of scuba diving by Surface Intervals.',
            image: programmeImg,
            moreInfo:"Surface Intervals, a clothing brand inspired by the ocean - is bringing a team of scuba diving experts to tell you their ocean tales and acquaint you with the basics of scuba diving."
        },
        {
            id: 'd1-2',
            time: '04.00pm',
            priceType: 'paid',
            venue: 'Main Stage',
            format: 'Talk',
            title: 'Discovering Sapporo - Japan’s Best-kept Secret',
            by: 'A masterclass on exploring the magical Japanese city of Sapporo by travel entrepreneur and creator Rashmi Chadha',
            image: programmeImg,
            moreInfo: "Rashmi Chadha is a powerhouse in India’s travel industry, not just for her own journeys, but also for her company WoVoyage that is helping Indians travel beyond the ordinary. She’ll be sharing her insights and experiences on what makes Sapporo the new ‘it thing’ for Japanese tourism."
        },
    ],
    day2: [
        {
            id: 'd2-1',
            time: '11.00am',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Panel',
            title: 'Vacations For The Soul',
            by: 'A masterclass on the philosophy and future of Wellness Tourism by CGH Earth',
            image: programmeImg,
            moreInfo: "CGH Earth is a collection of unique, eco-conscious retreats that prioritize authentic experiences and the science of soul through Ayurveda and Naturopathy. They will explore the massive growth of the wellness travel sector and what it means for the modern explorer. The session highlights how conscious healing is moving from a niche trend to the very heart of the global travel industry."
        },
    ],
};

export default PROGRAMMES;