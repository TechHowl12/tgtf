import programmeImg from '../images/programme.webp';
import travelWithKidsImg from '../images/travel-with-kids.png';
import thailandauthorityoftourismImg from '../images/thailand-authority-of-tourism.png';
import immersiveTrailsImg from '../images/Immersive-Trails.png';
import ahutisejpalImg from '../images/ahuti-sejpal.png';
import rockysinghImg from '../images/rocky-singh.png';
import bluetokaiImg from '../images/blue-tokai.png';
import surfaceItervalImg from '../images/surface-interval.png';
import volunteerYatraImg from '../images/volunteer-yatra.png';
import ashtadKollahImg from '../images/ashtad-kollah.png';
import sapporoImg from '../images/sapporo.png';
import koheventureImg from '../images/Kohventure-programmes.png';
import ahutisejpalandchepaparnaImg from '../images/ahuti-sejpal-and-chep-aparna.png';
import archanasinghImg from '../images/archana-singh.png';
import gargikothariImg from '../images/Gargi-Kothari.png';
import kikomanImg from '../images/kikoman.png';

const PROGRAMMES = {
    day1: [
        {
            id: 'd1-1',
            time: '03:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Strollers to Suitcases: mini explorer\'s meetup',
            by: 'Travel with kids',
            image: travelWithKidsImg,
            moreInfo:"Travel With Kids India is a family-focused travel platform and community that helps parents plan meaningful, kid-friendly journeys. Through curated trips, practical tips, and shared experiences, it makes travelling with children easier, more enjoyable, and full of memorable moments for the entire family."
        },
        {
            id: 'd1-2',
            time: '03:15pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Thailand Authority of Tourism',
            image: thailandauthorityoftourismImg,
            moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        },
        {
            id: 'd1-3',
            time: '03:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Engagement',
            title: 'Paint Your Persona',
            by: 'Immersive Trails',
            image: immersiveTrailsImg,
            moreInfo:"Immersive Trails is a travel and experiences platform offering curated, expert-led cultural and heritage journeys that connect travellers with local stories, traditions, and communities beyond conventional sightseeing."
        },
        {
            id: 'd1-4',
            time: '04:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Veggie Voyages',
            by: 'Ahuti Sejpal',
            image: ahutisejpalImg,
            moreInfo: "Ever struggled to find good vegetarian food while travelling? Join Ahuti Sejpal for a fun, interactive masterclass on vegetarian tourism, packed with smart food hacks, packing tips, destination advice, and real-world tricks to eat well on the road—without stress, compromise, or hunger. Perfect for curious, conscious travellers!"
        },
        // {
        //     id: 'd1-5',
        //     time: '04:30pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Masterclass',
        //     title: 'Wellness Materclass',
        //     by: '',
        //     image: programmeImg,
        //     moreInfo: "NA"
        // },
        {
            id: 'd1-6',
            time: '05:00pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Masterclass',
            title: 'Food as the Gateway to Travel: Why Every Journey Begins on the Plate',
            by: 'Rocky Singh',
            image: rockysinghImg,
            moreInfo:"Every great journey starts with a bite. From street snacks to signature dishes, food tells stories of place, people, and culture—turning travel into a sensory adventure where flavours guide memories, emotions, and meaningful explorations."
        },
        {
            id: 'd1-7',
            time: '06:00pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Thailand Authority of Tourism',
            image: thailandauthorityoftourismImg,
            moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        },
        // {
        //     id: 'd1-8',
        //     time: '06:00pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Masterclass',
        //     title: '',
        //     by: 'Rashmi Chaddha',
        //     image: programmeImg,
        //     moreInfo: ""
        // },
        {
            id: 'd1-9',
            time: '06:15pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Blue Tokai Coffee Brewing Workshop',
            by: 'Blue Tokai',
            image: bluetokaiImg,
            moreInfo: "Blue Tokai is a pioneering Indian coffee brand roasting fresh, sourcing responsibly, and turning everyday coffee moments into flavourful rituals."
        },
        {
            id: 'd1-10',
            time: '06:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Wisdom Vault',
            title: 'Dive beneath the surface—literally and figuratively',
            by: 'Surface Interval',
            image: surfaceItervalImg,
            moreInfo:"Surface Interval is an ocean-inspired sustainable lifestyle brand creating eco-friendly apparel while supporting marine conservation, coral restoration, and ocean awareness."
        },
        {
            id: 'd1-11',
            time: '07:15pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Travel with a cause',
            by: 'Volunteer Yatra',
            image: volunteerYatraImg,
            moreInfo: "Volunteer Yatra’s website connects travellers with meaningful volunteer-tourism opportunities across India, offering skill-exchange projects, community impact, and cultural immersion with hosts, food, and stays."
        },
        {
            id: 'd1-12',
            time: '08:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Sip Seychelles: The Takamaka Trail',
            by: 'Ashtad Kollah',
            image: ashtadKollahImg,
            moreInfo:"A masterclass celebrating the distinctive flavours of Takamaka Rum, crafted in the heart of the Seychelles. This session will take you on a sensory journey, exploring the rich heritage and tropical essence of this iconic Seychellois spirit"
        },
        {
            id: 'd1-13',
            time: '08:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Thailand Authority of Tourism',
            image: thailandauthorityoftourismImg,
            moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        },
    ],
    day2: [
        {
            id: 'd2-1',
            time: '03:00pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Blue Tokai Coffee Brewing Workshop',
            by: 'Blue Tokai',
            image: bluetokaiImg,
            moreInfo: "Blue Tokai is a pioneering Indian coffee brand roasting fresh, sourcing responsibly, and turning everyday coffee moments into flavourful rituals."
        },
        {
            id: 'd2-2',
            time: '03:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Thailand Authority of Tourism',
            image: thailandauthorityoftourismImg,
            moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        },
        {
            id: 'd2-3',
            time: '04:00pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Way of the Sword',
            by: 'Sapporo',
            image: sapporoImg,
            moreInfo: "Experience the power and precision of Kendo, the traditional Japanese martial art of swordsmanship. This dynamic performance showcases discipline, focus, and graceful combat techniques, offering a rare glimpse into Japan’s warrior heritage, philosophy, and centuries-old martial traditions—where spirit, skill, and respect come together on stage."
        },
        {
            id: 'd2-4',
            time: '04:15pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Little Passports',
            by: 'Kohventure',
            image: koheventureImg,
            moreInfo: "Konventures is an experiential travel and events platform creating thoughtfully designed journeys, activities, and programs that inspire exploration, learning, and adventure."
        },
        {
            id: 'd2-5',
            time: '04:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Engagement',
            title: 'Paint Your Persona',
            by: 'Immersive Trails ',
            image: immersiveTrailsImg,
            moreInfo: "Immersive Trails is a travel and experiences platform offering curated, expert-led cultural and heritage journeys that connect travellers with local stories, traditions, and communities beyond conventional sightseeing."
        },
        {
            id: 'd2-6',
            time: '05:00pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Veggie Voyages - A Silk Roads Chaikhana & Spain’s regional food culture - Experiences',
            by: 'Ahuti Sejpal and Chep Aparna',
            image: ahutisejpalandchepaparnaImg,
            moreInfo: "Ahuti Sejpal is a conscious travel advocate promoting vegetarian-friendly, mindful, and sustainable tourism worldwide. Travelling Thali is a culinary storytelling platform that explores cultures through food. Led by Chef Aparna, it brings global cuisines to life through vegetarian recipes, hands-on workshops, and shared dining experiences—connecting people, places, and traditions one plate at a time."
        },
        {
            id: 'd2-7',
            time: '05:15pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Thailand Authority of Tourism',
            image: thailandauthorityoftourismImg,
            moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        },
        {
            id: 'd2-8',
            time: '05:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Masterclass',
            title: 'Bucket List on Budget',
            by: 'Archana Singh',
            image: archanasinghImg,
            moreInfo: "Archana Singh is a budget travel enthusiast sharing smart tips, hacks, and inspiration to help travellers explore more while spending less."
        },
        {
            id: 'd2-9',
            time: '06:30pm',
            priceType: 'paid',
            venue: 'Discovery Box',
            format: 'Masterclass',
            title: 'Chopsticks Ninja Masterclass',
            by: 'Kikoman',
            image: kikomanImg,
            moreInfo: "Step into a fun, hands-on dining experience that turns chopstick skills into an art. Learn how to master chopsticks over a three-course meal—starting with chunky bites, moving on to noodles, and finishing with rice. Along the way, discover the cultural history of chopsticks across countries, understand when to use wooden, steel, or other types, and pick up etiquette tips that make you dine like a true ninja."
        },
        {
            id: 'd2-10',
            time: '07:30pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Sip Seychelles: The Takamaka Trail',
            by: 'Ashtad Kollah',
            image: ashtadKollahImg,
            moreInfo: "A masterclass celebrating the distinctive flavours of Takamaka Rum, crafted in the heart of the Seychelles. This session will take you on a sensory journey, exploring the rich heritage and tropical essence of this iconic Seychellois spirit"
        },
        {
            id: 'd2-11',
            time: '08:15pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Wine 101 Workshop',
            by: 'Gargi Kothari',
            image: gargikothariImg,
            moreInfo: "A beginner-friendly, fun introduction to the world of wine. Learn how to read wine labels, understand different styles, and choose the right wine based on your taste preferences, the food you’re eating, and even the weather—so every sip feels just right."
        },
    ],
};

export default PROGRAMMES;