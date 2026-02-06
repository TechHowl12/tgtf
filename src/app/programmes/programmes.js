import travelwithkidsImg from '../images/strollers_to_suitcase_img.webp';
import thailandauthorityoftourismImg from '../images/Thailand_Authority_of_Tourism.webp';
import immersiveTrailsImg from '../images/mask_painting.webp';
import ahutisejpalImg from '../images/Ahuti-Sejpal.webp';
import rockysinghImg from '../images/rocky_kunal.webp';
import bluetokaiImg from '../images/Blue_Tokai.webp';
import volunteerYatraImg from '../images/volunteer_yatra_img.webp';
import ashtadKollahImg from '../images/Ashtad-Kollah.png';
import koheventureImg from '../images/little_passports_img.webp';
import ahutisejpalandchepaparnaImg from '../images/Ahuti-Sejpal-and-Chep-Aparna.webp';
import gargikothariImg from '../images/Gargi-Kothari.png';
import kikomanImg from '../images/Kikoman.png';
import calligraphyImg from '../images/calligraphy_writing.webp'
import thailandcookingImg from '../images/Thailand_Cooking.webp'
import backyardImg from '../images/backyard_tourism.webp'
import MasaiJumpImg from '../images/Masai_Jump.webp'
import BeadworkImg from '../images/beads_making.webp'
import firesidefablesImg from '../images/fire_fables.webp'
import polarbearImg from '../images/polar_bear_img.webp';
import throughtheildImg from '../images/Through _the_wild_lens.webp';
import journeyImg from '../images/Journeys_to_well_being.webp';
import createImg from '../images/content_creators.webp';
import BucketListonBudgetImg from '../images/Bucket_list_on_a_budget.webp';
import AakashmaanImg from '../images/Aakash_maan.webp';
import kendoImg from "../images/kendo_img.webp";
import diveImg from "../images/Beneath_the_surface.webp";

const PROGRAMMES = {
    day1: [
        {
            id: 'd1-1',
            time: '3:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'Strollers to Suitcases: mini explorer\'s meetup',
            by: 'Travel with Kids',
            image: travelwithkidsImg,
            moreInfo:"Travel with kids without the stress. Join this relaxed meet-and-greet to ask questions, share stories, and discover practical tips for joyful, kid-friendly family adventures."
        },
        {
            id: 'd1-2',
            time: '3:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Echoes of the Ancients: Tibetan Mask Painting',
            by: 'Immersive Trails',
            image: immersiveTrailsImg,
            moreInfo:"Explore the spiritual art of Tibetan mask painting with Gyurmay Tsundu Bhutia, uncovering symbolism, colors, and stories behind sacred masks used in rituals and cultural performances."
        },
        {
            id: 'd1-3',
            time: '03:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Amazing Thailand',
            image: thailandauthorityoftourismImg,
            moreInfo: "Thailand’s official tourism platform sparks travel dreams with destination highlights, culture, festivals, experiences, and handy planning tips to explore the Land of Smiles with ease."
        },
        // {
        //     id: 'd1-4',
        //     time: '4:00pm',
        //     priceType: 'free',
        //     venue: 'The Horizon',
        //     format: 'Entertainment',
        //     title: 'Rhythms of Thailand',
        //     by: 'Tourism Authority of Thailand',
        //     image: thailandauthority,
        //     moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        // },
        {
            id: 'd1-5',
            time: '4:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Little passports',
            by: 'KohVenture',
            image: koheventureImg,
            moreInfo: "Curious about children travelling solo? Join this lively Q&A with the inspiring father–son founders as they share stories, insights, and honest advice—answering all your questions on solo kids trips, safety, confidence, and how young explorers learn to travel the world on their own."
        },
        {
            id: 'd1-6',
            time: '4:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Engagement',
            title: 'Smarter Travel: Alternative Ways to Explore the World',
            by: 'Aakash Maan, Archana Singh, Anupam Hans',
            image:AakashmaanImg,
            moreInfo: "Discover smarter ways to travel with creators and innovators exploring volunteering, home exchanges, and alternative stays—learn how flexibility and curiosity can unlock richer journeys, longer adventures, and lower costs."
        },
        {
            id: 'd1-7',
            time: '4:45pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Engagement',
            title: 'In search of Polar Bears - an Arctic wildlife exploration',
            by: 'Jayanth Sharma',
            image:polarbearImg,
            moreInfo: "Join Jayanth Sharma on a journey into the Arctic wild, exploring polar bear habitats, wildlife behaviour, extreme conditions, and the stories behind documenting life in one of the world’s most breathtaking and fragile landscapes."
        },
        {
            id: 'd1-8',
            time: '5:00pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Workshop',
            title: 'Brewed around the world',
            by: 'Blue Tokai',
            image: bluetokaiImg,
            moreInfo: "Step into a global coffee journey. Brew, taste, and explore beans from around the world while learning simple brewing basics, flavour profiles, and aromas- perfect for beginners and passionate coffee lovers alike."
        },
        // {
        //     id: 'd1-9',
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
            id: 'd1-10',
            time: '5:30pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Sacred Strokes: Tibetan Calligraphy',
            by: 'Immersive Trails',
            image: calligraphyImg,
            moreInfo: "Experience the meditative beauty of Tibetan calligraphy as Gyurmay Tsundu Bhutia demonstrates graceful scripts, ancient techniques, and the deeper meaning behind this sacred written art form."
        },
        {
            id: 'd1-11',
            time: '5:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Amazing Thailand',
            image: thailandauthorityoftourismImg,
            moreInfo:"Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
        {
            id: 'd1-12',
            time: '6:00pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Engagement',
            title: 'Food as the Gateway to Travel: Why Every Journey Begins on the Plate',
            by: 'Rocky Singh, Kunal Vijakar, Pawan Shahri',
            image: rockysinghImg,
            moreInfo:"Every great journey starts with a bite. From street snacks to signature dishes, food tells the story of a place- its people, culture, and traditions. This panel explores Food as the Gateway to Travel, and why every journey truly begins on the plate."
        },
        {
            id: 'd1-13',
            time: '6:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement  ',
            title: 'Dive Beneath Surface Fireside chat',
            by: 'Shaan Singh, Sushant Joshi, Rhea Malhotra',
            image: diveImg,
            moreInfo:"Join Surface Interval and Sushant Joshi for a fireside chat exploring deep-sea diving, ocean adventures, marine life, conservation, and the thrill of discovering the hidden world beneath the waves."
        },
        {
            id: 'd1-14',
            time: '6:45pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Masterclass',
            title: 'Where\'s the veggie?',
            by: 'Aahuti Sejpal',
            image: ahutisejpalImg,
            moreInfo: "Discover how vegetarian travel breaks stereotypes- real stories, smart tools, and insider tips to eat boldly, connect with local cultures, and travel confidently as a vegetarian anywhere in the world."
        },
        {
            id: 'd1-15',
            time: '7:00pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Flavours of Thailand: From Street to Stove',
            by: 'Amazing Thailand',
            image: thailandcookingImg,
            moreInfo:"Dive into Thai flavours in this hands-on cooking workshop, learning traditional techniques, iconic dishes, and bold balance of sweet, sour, salty, and spicy- guided by authentic recipes and cultural insights."
        },
        {
            id: 'd1-16',
            time: '7:00pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Journey to well-being',
            by: 'Salil Subhash Paranjape, CGH Earth Wellness',
            image: journeyImg,
            moreInfo:"Dive into Thai flavours in this hands-on cooking workshop, learning traditional techniques, iconic dishes, and bold balance of sweet, sour, salty, and spicy- guided by authentic recipes and cultural insights."
        },
        {
            id: 'd1-17',
            time: '7:30pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Through the wild lens- Nature, Conservation and Photography',
            by: 'David Raju, CGH Earth Experience',
            image: throughtheildImg,
            moreInfo:"Dive into Thai flavours in this hands-on cooking workshop, learning traditional techniques, iconic dishes, and bold balance of sweet, sour, salty, and spicy- guided by authentic recipes and cultural insights."
        },
        {
            id: 'd1-18',
            time: '7:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Maasai Jump Dance - Adumu Ascent',
            by: 'Magical Kenya',
            image: MasaiJumpImg,
            moreInfo:"The world-famous Maasai Jump Dance - Adumu Ascent Experience the Maasai’s traditional jumping dance. A powerful display of strength, agility, and cultural pride."
        },
        {
            id: 'd1-19',
            time: '8:00pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Ushanga Making - Traditional Maasai Beadwork Practice',
            by: 'Magical Kenya',
            image: BeadworkImg,
            moreInfo:"Create traditional Maasai jewellery using Ushanga techniques and understand the cultural symbolism behind the craft."
        },
        {
            id: 'd1-20',
            time: '8:00pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Sip Seychelles: the Takamaka Trail',
            by: 'Takamaka',
            image: ashtadKollahImg,
            moreInfo: "Discover the spirit of the Seychelles in this immersive Takamaka Rum masterclass, exploring its rich heritage, tropical flavours, and craftsmanship through a guided sensory journey of taste, aroma, and storytelling."
        },
        {
            id: 'd1-21',
            time: '8:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Amazing Thailand',
            image: thailandauthorityoftourismImg,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
    ],
    day2: [
        {
            id: 'd2-1',
            time: '3:15pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Workshop',
            title: 'Brewed around the world',
            by: 'Blue Tokai',
            image: bluetokaiImg,
            moreInfo: "Step into a global coffee journey. Brew, taste, and explore beans from around the world while learning simple brewing basics, flavour profiles, and aromas—perfect for beginners and passionate coffee lovers alike."
        },
        {
            id: 'd2-2',
            time: '03:30pm ',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Ushanga Making - Traditional Maasai Beadwork Practice',
            by: 'Magical Kenya',
            image: BeadworkImg,
            moreInfo: "Create traditional Maasai jewellery using Ushanga techniques and understand the cultural symbolism behind the craft."
        },
        {
            id: 'd2-3',
            time: '03:45pm ',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Way of the Swords- Kendo',
            by: '',
            image: kendoImg,
            moreInfo: "Witness the power and precision of Kendo, Japan’s traditional martial art of swordsmanship. This dynamic performance reveals discipline, focus, and centuries-old warrior philosophy—where spirit, skill, and respect meet in graceful combat."
        },
        
        // {
        //     id: 'd2-4',
        //     time: '4:00pm',
        //     priceType: 'free',
        //     venue: 'The Horizon',
        //     format: 'Entertainment',
        //     title: 'Way of the Sword',
        //     by: '',
        //     image: sapporoImg,
        //     moreInfo: "Witness the power and precision of Kendo, Japan’s traditional martial art of swordsmanship. This dynamic performance reveals discipline, focus, and centuries-old warrior philosophy- where spirit, skill, and respect meet in graceful combat."
        // },
        {
            id: 'd2-5',
            time: '4:00pm',
            priceType: 'free',
            venue: 'Discovery Box',
            format: 'Engagement',
            title: 'Bucket List on Budget',
            by: 'Archana Singh & Rohit Malve',
            image: BucketListonBudgetImg,
            moreInfo: "Travel more, spend smarter. Join Archana Singh for a power-packed masterclass packed with budget hacks, smart planning tips, and practical strategies to turn your travel bucket list into affordable, achievable adventures."
        },
        {
            id: 'd2-6',
            time: '4:15pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Masterclass',
            title: 'Travel with a cause',
            by: 'Volunteer Yatra',
            image: volunteerYatraImg,
            moreInfo: "A journey rooted in purpose and impact, this session explores how Volunteer Yatra was born—transforming travel into a force for good by connecting travellers with communities through meaningful, service-led experiences."
        },
        {
            id: 'd2-7',
            time: '4:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Engagement',
            title: 'Backyard Tourism',
            by: 'Harshvardhan Tanvar, Alisha Sadikot, Simin Mehta, Kaushal Karkhanis',
            image: backyardImg,
            moreInfo: "Rediscover the magic of your own city in this engaging panel by Backyard Tourism, exploring hidden stories, local experiences, and mindful ways to travel closer to home—proving meaningful journeys don’t always require going far."
        },
        {
            id: 'd2-8',
            time: '5:00pm',
            priceType: 'paid',
            venue: 'Discovery Box',
            format: 'Engagement',
            title: 'Wine 101',
            by: 'By Gargi Kothari',
            image: gargikothariImg,
            moreInfo: "A beginner-friendly, fun introduction to the world of wine. Learn how to read wine labels, understand different styles, and choose the right wine based on your taste preferences, the food you’re eating, and even the weather—so every sip feels just right."
        },
        {
            id: 'd2-9',
            time: '05:15pm',
            priceType: 'free',
            venue: 'Explorer\'s Lab',
            format: 'Engagement',
            title: 'How Content Creators Design High Value Trips',
            by: 'CREATE',
            image: createImg,
            moreInfo: "Come learn how to travel smarter with leading creators who’ll share planning secrets, timing tricks, and clever splurges—so you can turn any budget into a journey packed with unforgettable moments and real value, not just pretty photos."
        },
        // {
        //     id: 'd2-10',
        //     time: '5:15pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Engagement',
        //     title: 'How Content Creators Design High Value Trips',
        //     by: 'Create',
        //     image: programmeImg,
        //     moreInfo: "Travel more, spend smarter. Join Archana Singh for a power-packed masterclass packed with budget hacks, smart planning tips, and practical strategies to turn your travel bucket list into affordable, achievable adventures."
        // },
        {
            id: 'd2-11',
            time: '05:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Maasai Jump Dance - Adumu Ascent',
            by: 'Magical Kenya',
            image: MasaiJumpImg,
            moreInfo: "The world-famous Maasai Jump Dance - Adumu Ascent Experience the Maasai’s traditional jumping dance. A powerful display of strength, agility, and cultural pride."
        },
        // {
        //     id: 'd2-12',
        //     time: '05:45pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Entertainment',
        //     title: 'Ushanga Making - Traditional Maasai Beadwork Practice',
        //     by: 'Magical Kenya',
        //     image: BeadworkImg,
        //     moreInfo: "Create traditional Maasai jewellery using Ushanga techniques and understand the cultural symbolism behind the craft."
        // },
        // {
        //     id: 'd2-13',
        //     time: '5:30pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Masterclass',
        //     title: 'Bucket List on Budget',
        //     by: 'Archana Singh',
        //     image: archanasinghImg,
        //     moreInfo: "Travel more, spend smarter. Join Archana Singh for a power-packed masterclass packed with budget hacks, smart planning tips, and practical strategies to turn your travel bucket list into affordable, achievable adventures."
        // },
        {
            id: 'd2-14',
            time: '6:00pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Masterclass',
            title: 'Rhythms of Thailand',
            by: 'Amazing Thailand',
            image: thailandauthorityoftourismImg,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
        {
            id: 'd2-15',
            time: '6:15pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Flavours of Thailand: From Street to Stove',
            by: 'Amazing Thailand',
            image: thailandcookingImg,
            moreInfo: "Dive into Thai flavours in this hands-on cooking workshop, learning traditional techniques, iconic dishes, and bold balance of sweet, sour, salty, and spicy—guided by authentic recipes and cultural insights."
        },
        {
            id: 'd2-16',
            time: '6:30pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Engagement',
            title: 'Food Fireside Fables',
            by: 'Rocky Singh & Chef Vicky Ratnani',
            image: firesidefablesImg,
            moreInfo: "Join us for a free-flowing, fun conversation between two men whose lives revolve around food—stories, memories, madness, and meals—served with humour, honesty, and an unapologetic love for eating."
        },
        {
            id: 'd2-17',
            time: '6:30pm',
            priceType: 'paid',
            venue: 'Explorer\'s Lab',
            format: 'Workshop',
            title: 'Veggie Voyages',
            by: 'Aahuti Sejpal & Aparna Bhatt',
            image: ahutisejpalandchepaparnaImg,
            moreInfo: "An intimate, food-led cultural immersion through Spain, blending regional vegetarian tastings, language learning, history, and guided conversation- inviting participants to explore destinations slowly, sensorially, and meaningfully through shared meals and stories."
        },
        {
            id: 'd2-18',
            time: '7:30pm',
            priceType: 'paid',
            venue: 'Discovery Box',
            format: 'Workshop',
            title: 'Chopsticks Ninja',
            by: 'Abokado',
            image: kikomanImg,
            moreInfo: "Turn chopstick skills into an art. This hands-on dining experience teaches chopstick techniques through a three-course meal, blending cultural history, etiquette, and playful practice-ending with rice-level ninja mastery."
        },
        // {
        //     id: 'd2-19',
        //     time: '6:45pm',
        //     priceType: 'free',
        //     venue: 'Discovery Box',
        //     format: 'Engagement',
        //     title: 'Bucket List on Budget',
        //     by: 'Archana Singh',
        //     image: archanasinghImg,
        //     moreInfo: "Travel more, spend smarter. Join Archana Singh for a power-packed masterclass packed with budget hacks, smart planning tips, and practical strategies to turn your travel bucket list into affordable, achievable adventures."
        // },
        // {
        //     id: 'd2-20',
        //     time: '7:30pm',
        //     priceType: 'paid',
        //     venue: 'The Horizon',
        //     format: 'Engagement',
        //     title: 'Chopsticks Ninja',
        //     by: 'abokado',
        //     image: kikomanImg,
        //     moreInfo: "Turn chopstick skills into an art. This hands-on dining experience teaches chopstick techniques through a three-course meal, blending cultural history, etiquette, and playful practice—ending with rice-level ninja mastery."
        // },
        // {
        //     id: 'd2-21',
        //     time: '7:30pm',
        //     priceType: 'free',
        //     venue: 'F&B Lounge',
        //     format: 'Workshop',
        //     title: 'Sip seychelles: The Takamaka Trail',
        //     by: 'Takamaka',
        //     image: ashtadKollahImg,
        //     moreInfo: "Discover the spirit of the Seychelles in this immersive Takamaka Rum masterclass, exploring its rich heritage, tropical flavours, and craftsmanship through a guided sensory journey of taste, aroma, and storytelling."
        // },
        {
            id: 'd2-22',
            time: '7:45pm',
            priceType: 'free',
            venue: 'The Horizon',
            format: 'Entertainment',
            title: 'Rhythms of Thailand',
            by: 'Amazing Thailand',
            image: thailandauthorityoftourismImg,
            moreInfo: "Experience Thailand’s cultural elegance through traditional Thai dance, the iconic Khon performance Hanuman Captures Suphanna Matcha, the energetic Long Drum Dance (Ram Klong Yao), and the joyful Songkran dance celebrating Thailand’s traditional New Year."
        },
        {
            id: 'd2-23',
            time: '8:00pm',
            priceType: 'free',
            venue: 'F&B Lounge',
            format: 'Workshop',
            title: 'Sip Seychelles: the Takamaka Trail',
            by: 'Takamaka',
            image: ashtadKollahImg,
            moreInfo: "Discover the spirit of the Seychelles in this immersive Takamaka Rum masterclass, exploring its rich heritage, tropical flavours, and craftsmanship through a guided sensory journey of taste, aroma, and storytelling."
        },
    ],
};

export default PROGRAMMES;