import programmeImg from '../images/programme.webp';
import travelWithKidsImg from '../images/Travel-with-kids.png';
import thailandauthorityoftourismImg from '../images/Thailand-Authority-of-Tourism.png';
import thailandauthority from '../images/Thailand-Authority-of-Tourism_1.webp';
import immersiveTrailsImg from '../images/Immersive-Trails.png';
import ahutisejpalImg from '../images/Ahuti-Sejpal.webp';
import rockysinghImg from '../images/Rocky-Singh.png';
import bluetokaiImg from '../images/Blue-Tokai.png';
import surfaceItervalImg from '../images/Surface-Interval.png';
import volunteerYatraImg from '../images/Volunteer-Yatra.png';
import ashtadKollahImg from '../images/Ashtad-Kollah.png';
import sapporoImg from '../images/Sapporo.png';
import koheventureImg from '../images/Kohventure-programmes.png';
import ahutisejpalandchepaparnaImg from '../images/Ahuti-Sejpal-and-Chep-Aparna.webp';
import archanasinghImg from '../images/Archana-Singh.png';
import gargikothariImg from '../images/Gargi-Kothari.png';
import kikomanImg from '../images/Kikoman.png';
import calligraphyImg from '../images/tibetian-calligraphy.webp'
import thailandcookingImg from '../images/thailand-cooking.webp'
import backyardImg from '../images/backyard.webp'

const PROGRAMMES = {
    day1: [
        {
            id: 'd1-1',
            time: '03:00pm - 03:45pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Strollers to Suitcases: mini explorer\'s meetup',
            by: 'Travel with Kids',
            image: travelWithKidsImg,
            moreInfo:"Travel with kids without the stress. Join this relaxed meet-and-greet to ask questions, share stories, and discover practical tips for joyful, kid-friendly family adventures."
        },
        // {
        //     id: 'd1-2',
        //     time: '03:15pm',
        //     priceType: 'free',
        //     venue: 'The Horizon',
        //     format: 'Entertainment',
        //     title: 'Rhythms of Thailand',
        //     by: 'Tourism Authority of Thailand',
        //     image: thailandauthorityoftourismImg,
        //     moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        // },
        {
            id: 'd1-3',
            time: '03:30pm - 04:15pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Echoes of the Ancients: Tibetan Mask Painting',
            by: 'Immersive Trails',
            image: immersiveTrailsImg,
            moreInfo:"Explore the spiritual art of Tibetan mask painting with Gyurmay Tsundu Bhutia, uncovering symbolism, colors, and stories behind sacred masks used in rituals and cultural performances."
        },
        {
            id: 'd1-4',
            time: '04:00pm - 04:15pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Tourism Authority of Thailand',
            image: thailandauthority,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
        {
            id: 'd1-5',
            time: '04:00pm - 04:45pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Travel with a cause',
            by: 'Volunteer Yatra',
            image: volunteerYatraImg,
            moreInfo: "A journey rooted in purpose and impact, this session explores how Volunteer Yatra was born- transforming travel into a force for good by connecting travellers with communities through meaningful, service-led experiences."
        },
        // {
        //     id: 'd1-6',
        //     time: '04:45pm - 05:30pm',
        //     priceType: 'free',
        //     venue: 'The Horizon',
        //     format: 'Masterclass',
        //     title: 'Dive beneath the surface—literally and figuratively',
        //     by: 'Surface Interval',
        //     image: surfaceItervalImg,
        //     moreInfo:"Dive into the world of deep-sea adventures with Surface Interval. This engaging panel covers diving basics to advanced experiences, sharing expert safety tips, planning insights, and inspiration for unforgettable ocean-led journeys."
        // },
        // {
        //     id: 'd1-7',
        //     time: '04:45pm - 05:30pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Entertainment',
        //     title: 'Toe Hold',
        //     by: 'Jayant Sharma',
        //     image: programmeImg,
        //     moreInfo: "Explore wildlife through your lens in this masterclass by Toe Hold, where expert photographers share tips on capturing animals in their natural habitats, mastering light and movement, and telling powerful visual stories."
        // },
        {
            id: 'd1-8',
            time: '05:00pm - 05:45pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Workshop',
            title: 'Coffees from around the world',
            by: 'Blue Tokai',
            image: bluetokaiImg,
            moreInfo: "Step into a global coffee journey. Brew, taste, and explore beans from around the world while learning simple brewing basics, flavour profiles, and aromas- perfect for beginners and passionate coffee lovers alike."
        },
        {
            id: 'd1-9',
            time: '05:45pm - 06:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Sacred Strokes: Tibetan Calligraphy',
            by: 'Immeqrsive Trails',
            image: calligraphyImg,
            moreInfo: "Experience the meditative beauty of Tibetan calligraphy as Gyurmay Tsundu Bhutia demonstrates graceful scripts, ancient techniques, and the deeper meaning behind this sacred written art form."
        },
        {
            id: 'd1-10',
            time: '06:00 - 06:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Engagement',
            title: 'Food as the Gateway to Travel: Why Every Journey Begins on the Plate',
            by: 'Rocky Singh',
            image: rockysinghImg,
            moreInfo:"Every great journey starts with a bite. From street snacks to signature dishes, food tells the story of a place- its people, culture, and traditions. This panel explores Food as the Gateway to Travel, and why every journey truly begins on the plate."
        },
        {
            id: 'd1-11',
            time: '06:45pm - 07:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Masterclass',
            title: 'Where the veggie?',
            by: 'Aahuti Sejpal',
            image: ahutisejpalImg,
            moreInfo: "Discover how vegetarian travel breaks stereotypes- real stories, smart tools, and insider tips to eat boldly, connect with local cultures, and travel confidently as a vegetarian anywhere in the world."
        },
        {
            id: 'd1-12',
            time: '07:00pm - 08:00pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Thailand Cooking Workshop',
            by: 'Tourism Authority of Thailand',
            image: thailandcookingImg,
            moreInfo:"Dive into Thai flavours in this hands-on cooking workshop, learning traditional techniques, iconic dishes, and bold balance of sweet, sour, salty, and spicy- guided by authentic recipes and cultural insights."
        },
        {
            id: 'd1-13',
            time: '08:00pm - 08:30pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Sip the seychelles: The Takamaka Trail',
            by: '',
            image: ashtadKollahImg,
            moreInfo: "Discover the spirit of the Seychelles in this immersive Takamaka Rum masterclass, exploring its rich heritage, tropical flavours, and craftsmanship through a guided sensory journey of taste, aroma, and storytelling."
        },
        {
            id: 'd1-14',
            time: '08:30pm - 08:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Tourism Authority of Thailand',
            image: thailandauthority,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
    ],
    day2: [
        {
            id: 'd2-1',
            time: '03:15pm - 04:00pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Workshop',
            title: 'Coffees from around the world',
            by: 'Blue Tokai',
            image: bluetokaiImg,
            moreInfo: "Step into a global coffee journey. Brew, taste, and explore beans from around the world while learning simple brewing basics, flavour profiles, and aromas—perfect for beginners and passionate coffee lovers alike."
        },
        // {
        //     id: 'd2-2',
        //     time: '03:45pm - ',
        //     priceType: 'free',
        //     venue: 'The Horizon',
        //     format: 'Entertainment',
        //     title: 'Rhythms of Thailand',
        //     by: 'Tourism Authority of Thailand',
        //     image: thailandauthorityoftourismImg,
        //     moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        // },
        {
            id: 'd2-3',
            time: '04:00pm - 04:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Way of the Sword',
            by: 'Sapporo',
            image: sapporoImg,
            moreInfo: "Witness the power and precision of Kendo, Japan’s traditional martial art of swordsmanship. This dynamic performance reveals discipline, focus, and centuries-old warrior philosophy- where spirit, skill, and respect meet in graceful combat."
        },
        {
            id: 'd2-4',
            time: '04:15pm - 04:45pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Little Passports',
            by: 'Kohventure',
            image: koheventureImg,
            moreInfo: "Curious about children travelling solo? Join this lively Q&A with the inspiring father-son founders as they share stories, insights, and honest advice- answering all your questions on solo kids trips, safety, confidence, and how young explorers learn to travel the world on their own."
        },
        {
            id: 'd2-5',
            time: '04:30pm - 5:00pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Echoes of the Ancients: Tibetan Mask Painting',
            by: 'Immersive Trails ',
            image: immersiveTrailsImg,
            moreInfo: "Explore the spiritual art of Tibetan mask painting with Gyurmay Tsundu Bhutia, uncovering symbolism, colors, and stories behind sacred masks used in rituals and cultural performances."
        },
        // {
        //     id: 'd2-6',
        //     time: '05:00pm - 05:30pm',
        //     priceType: 'free',
        //     venue: 'The Horizon',
        //     format: 'Engagement',
        //     title: 'Kenya Performance',
        //     by: '',
        //     image: programmeImg,
        //     moreInfo: ""
        // },
        // {
        //     id: 'd2-7',
        //     time: '05:00pm - 05:30pm',
        //     priceType: 'free',
        //     venue: 'Explorer\'s Lab',
        //     format: 'Entertainment',
        //     title: 'Tiramisu workshop',
        //     by: 'Mr. Misu',
        //     image: programmeImg,
        //     moreInfo: ""
        // },
        {
            id: 'd2-8',
            time: '05:30pm - 6:00pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Masterclass',
            title: 'Bucket List on a Budget',
            by: 'Archana Singh',
            image: archanasinghImg,
            moreInfo: "Travel more, spend smarter. Join Archana Singh for a power-packed masterclass packed with budget hacks, smart planning tips, and practical strategies to turn your travel bucket list into affordable, achievable adventures."
        },
        {
            id: 'd2-9',
            time: '05:45pm - 06:00pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Masterclass',
            title: 'Rhythms of Thailand',
            by: 'Tourism Authority of Thailand',
            image: thailandauthority,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
        {
            id: 'd2-10',
            time: '06:00pm - 07:00pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Thailand Cooking Workshop',
            by: 'Tourism Authority of Thailand',
            image: thailandcookingImg,
            moreInfo: "Dive into Thai flavours in this hands-on cooking workshop, learning traditional techniques, iconic dishes, and bold balance of sweet, sour, salty, and spicy—guided by authentic recipes and cultural insights."
        },
        {
            id: 'd2-11',
            time: '06:30pm - 07:00pm',
            priceType: 'paid',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Chopsticks Ninja',
            by: 'Kikkoman',
            image: kikomanImg,
            moreInfo: "Turn chopstick skills into an art. This hands-on dining experience teaches chopstick techniques through a three-course meal, blending cultural history, etiquette, and playful practice-ending with rice-level ninja mastery."
        },
        {
            id: 'd2-12',
            time: '06:30pm - 08:30pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Workshop',
            title: 'Veggie Voyage',
            by: 'Aahuti Sejpal and Aparna Bhatt',
            image: ahutisejpalandchepaparnaImg,
            moreInfo: "An intimate, food-led cultural immersion through Spain and the Silk Roads, blending regional vegetarian tastings, language learning, history, and guided conversation- inviting participants to explore destinations slowly, sensorially, and meaningfully through shared meals and stories."
        },
        {
            id: 'd2-13',
            time: '07:00pm - 07:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Engagement',
            title: 'Backyard Tourism',
            by: '',
            image: backyardImg,
            moreInfo: "Rediscover the magic of your own city in this engaging panel by Backyard Tourism, exploring hidden stories, local experiences, and mindful ways to travel closer to home- proving meaningful journeys don’t always require going far."
        },
        {
            id: 'd2-14',
            time: '07:30pm - 08:00pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Sip the seychelles: The Takamaka Trail',
            by: '',
            image: ashtadKollahImg,
            moreInfo: "Discover the spirit of the Seychelles in this immersive Takamaka Rum masterclass, exploring its rich heritage, tropical flavours, and craftsmanship through a guided sensory journey of taste, aroma, and storytelling."
        },
        {
            id: 'd2-15',
            time: '08:00pm - 08:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Tourism Authority of Thailand',
            image: thailandauthority,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
        {
            id: 'd2-16',
            time: '08:00pm - 08:30pm',
            priceType: 'paid',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Wine 101',
            by: 'Gargi Kothari',
            image: gargikothariImg,
            moreInfo: "A beginner-friendly, fun introduction to the world of wine. Learn how to read wine labels, understand different styles, and choose the right wine based on your taste preferences, the food you’re eating, and even the weather- so every sip feels just right."
        },
    ],
};

export default PROGRAMMES;