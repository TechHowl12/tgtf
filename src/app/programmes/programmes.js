import programmeImg from '../images/programme.webp';

const PROGRAMMES = {
    day1: [
        {
            id: 'd1-1',
            time: '02.30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Workshop',
            title: 'PAINT SOMETHING',
            by: 'by Parthip Thyagarajan, Lubaina Sheerazi, Pankaj Anand, Prasad Ramamurthy, & Riaan George',
            image: programmeImg,
        },
        {
            id: 'd1-2',
            time: '04.00pm',
            priceType: 'paid',
            venue: 'Main Stage',
            format: 'Talk',
            title: 'DESIGN IN THE REAL WORLD',
            by: 'by Parthip Thyagarajan, Lubaina Sheerazi, Pankaj Anand, Prasad Ramamurthy, & Riaan George',
            image: programmeImg,
        },
    ],
    day2: [
        {
            id: 'd2-1',
            time: '11.00am',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Panel',
            title: 'FUTURE OF CREATIVITY',
            by: 'by Parthip Thyagarajan, Lubaina Sheerazi, Pankaj Anand, Prasad Ramamurthy, & Riaan George',
            image: programmeImg,
        },
    ],
};

export default PROGRAMMES;