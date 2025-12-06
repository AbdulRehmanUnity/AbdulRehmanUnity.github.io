// Portfolio data
const bio = {
    basics: {
        name: "Abdul Rehman",
        label: "Senior Game Developer/Producer",
        picture: "img/Abdul.JPG",
        email: "abdulrehmanyaseen92@gmail.com",
        phone: "+92-307-4118815",
        website: "https://AbdulRehmanUnity.github.io",
        summary: "Dynamic and creative Game Developer with 7+ years of experience producing robust, scalable code for engaging and immersive gaming experiences. Proficient in Unity and C#, with a strong background in problem-solving, optimizing performance, and implementing innovative gameplay features. Passionate about pushing the boundaries of interactive entertainment and delivering high-quality projects on time.",
        location: {
            addra: "",
            postalCode: "54000",
            city: "Lahore",
            countryCode: "PK",
            region: "Punjab"
        },
        profiles: [
            {
                network: "GitHub",
                username: "github",
                url: "https://github.com/AbdulRehmanUnity"
            },
            {
                network: "LinkedIn",
                username: "linkedin",
                url: "https://www.linkedin.com/in/abdul-rehman-0b81a6126"
            }
        ]
    },
    interests: [
        { name: "Creative Design" },
        { name: "Gaming" },
        { name: "Art & Animation" },
        { name: "Robotics" },
        { name: "Programing" }
    ],
    skills: [
        {
            name: "Languages and Frameworks",
            keywords: ["C#", "C++", "Node.js"]
        },
        {
            name: "Tools",
            keywords: ["Unity", "Android Studio", "GitHub", "Visual Studio"]
        }
    ],
    education: [
        {
            institution: "Lahore Leads University, Lahore",
            area: "Bachelor Computer Science",
            studyType: "B.S",
            startDate: "2013",
            endDate: "2017",
            courses: []
        }
    ],
    work: [
        {
            company: "Game District",
            position: "Senior Game Developer",
            website: "https://gamedistrict.co/",
            startDate: "2019-08-21",
            endDate: "2022-10-31",
            summary: "Senior Game Developer in a Team (Playspare)",
            highlights: [
                "Led development and prototyping of mobile game features, mentoring junior developers",
                "Built and delivered full-fledged game solutions, ensuring quality and performance",
                "Collaborated with a team to design and create engaging gameplay experiences"
            ]
        },
        {
            company: "Desert Game Studio",
            position: "Lead Game Developer",
            website: "https://www.desertgamestudio.com/",
            startDate: "2022-11-12",
            endDate: "2024-10-31",
            summary: "Lead Developer of a mini Team",
            highlights: [
                "I have led development teams, creating prototypes for junior developers and delivering complete game projects",
                "My focus is on crafting interactive and engaging mobile game experiences."
            ]
        }
    ],
    awards: [
        {
            title: "3 Star Performance",
            date: "2020",
            awarder: "Game District",
            summary: ""
        },
        {
            title: "Super Performance",
            date: "2021",
            awarder: "Game District",
            summary: ""
        },
        {
            title: "Best Leading Award",
            date: "2023",
            awarder: "Desert Game Studio",
            summary: ""
        }
    ],
    references: [
        {
            name: "Available upon request"
        }
    ]
};

// Projects data
const projects = [
    {
        id: "supermarket",
        title: "Super Market Simulator",
        date: "2024",
        image: "img/SuperMarketSimulator/game_logo.png",
        labels: ["C#", "Unity", "Optimization", "Performance", "Animations", "GitHub", "Mathematics"],
        summary: "In Supermarket Simulator, I designed and implemented responsive controls for seamless player interactions, allowing smooth management of customers, inventory, and store operations. Focused on optimization to ensure flawless performance across all devices, even with high customer flow and complex store layouts. Developed scalable systems for stock management, staff hiring, and store expansion, enabling dynamic progression. Introduced engaging mechanics like handling VIP shoppers, competing with rival stores, and seasonal sales events. Ensured a rich player experience with strategic resource management, immersive economic systems, and rewarding growth opportunities.",
        images: [
            "img/SuperMarketSimulator/game_Cover 1.png",
            "img/SuperMarketSimulator/game_Cover 2.png", 
            "img/SuperMarketSimulator/game_Cover 3.png",
            "img/SuperMarketSimulator/game_Cover 4.png"
        ],
        description: {
            overview: "A comprehensive supermarket management simulation game that challenges players to build and operate their own retail empire. From stocking shelves to managing customer flow, every aspect of supermarket operations is simulated with realistic mechanics.",
            features: [
                "Responsive controls for seamless player interactions",
                "Dynamic customer AI and behavior patterns",
                "Comprehensive inventory management system",
                "Staff hiring and management mechanics",
                "Store expansion and decoration options",
                "VIP customer handling and special events",
                "Competitive multiplayer elements",
                "Offline progression system"
            ],
            technicalHighlights: [
                "Optimized for smooth performance across all devices",
                "Scalable architecture supporting complex store layouts",
                "Advanced animations and visual feedback systems",
                "Efficient resource management algorithms",
                "Dynamic pricing and economic simulation"
            ],
            challenges: [
                "Balancing gameplay complexity with user accessibility",
                "Optimizing performance for high customer density scenarios",
                "Creating engaging progression systems",
                "Implementing realistic economic simulation"
            ]
        }
    },
    {
        id: "idlerestaurant", 
        title: "Idle Arcade Restaurant Tycoon Game",
        date: "2022",
        image: "img/IdleArcadeResturant/game_logo.png",
        labels: ["C#", "Unity", "Optimization", "Performance", "Animations", "GitHub", "Mathematics"],
        summary: "In this project, I implemented responsive controls for intuitive player interactions, enabling smooth movement for managing customer orders and kitchen tasks. Focused on optimization, ensuring seamless performance across devices, even in complex gameplay scenarios. Designed scalable systems for restaurant upgrades, staff management, and customer interactions. Incorporated dynamic gameplay mechanics, like serving VIP customers and competing globally, while ensuring robust backend systems for offline progression. Prioritized user experience with efficient resource management and engaging progression loops.",
        images: ["img/IdleArcadeResturant/game_Cover.png"],
        playStoreUrl: "https://apkpure.com/idle-restaurant-tycoon-games/com.playspare.hyperidlerestaurant",
        description: {
            overview: "An engaging idle restaurant management game where players build and expand their culinary empire. From simple food stalls to multi-story restaurants, manage every aspect of the business while earning profits even when offline.",
            features: [
                "Intuitive tap-and-manage gameplay",
                "Restaurant expansion and upgrade systems",
                "Staff management and automation",
                "VIP customer service mechanics",
                "Global leaderboards and competitions",
                "Offline progression and income generation",
                "Multiple restaurant themes and decorations"
            ],
            technicalHighlights: [
                "Optimized performance across mobile devices",
                "Scalable restaurant upgrade architecture",
                "Efficient AI systems for staff and customers",
                "Smooth animations and visual feedback",
                "Robust offline calculation systems"
            ],
            challenges: [
                "Balancing idle progression with active gameplay",
                "Creating engaging long-term progression",
                "Optimizing for various device specifications",
                "Implementing fair monetization strategies"
            ]
        }
    },
    {
        id: "blockslidepuzzle",
        title: "Number Slide Puzzle",
        date: "2022",
        image: "img/BlockSlidePuzzle/game_logo.png",
        labels: ["C#", "Unity", "Animations", "GitHub", "Mathematics"],
        summary: "The Number Slide Puzzle Game offers two modes: Classic and Picture. In Classic mode, players rearrange numbered tiles to form the correct sequence, while in Picture mode, they solve puzzles by arranging image pieces into a complete picture. Both modes offer a fun, engaging challenge that requires strategic thinking and problem-solving skills.",
        images: ["img/BlockSlidePuzzle/game_Cover.png"],
        description: {
            overview: "A classic sliding puzzle game reimagined with modern design and dual gameplay modes. Test your logical thinking with numbered tiles or enjoy visual puzzles with beautiful pictures.",
            features: [
                "Classic number sliding puzzle mode",
                "Picture puzzle mode with beautiful imagery",
                "Multiple difficulty levels (3x3, 4x4, 5x5)",
                "Smooth drag-and-drop mechanics",
                "Timer and move counter",
                "Random puzzle generation",
                "Hint system for beginners"
            ],
            technicalHighlights: [
                "Efficient grid-based puzzle logic",
                "Responsive touch controls",
                "Smooth tile animations",
                "Dynamic difficulty scaling",
                "Optimized for mobile devices"
            ],
            challenges: [
                "Creating intuitive touch controls",
                "Implementing efficient puzzle generation algorithms",
                "Balancing difficulty progression",
                "Ensuring smooth animations on all devices"
            ]
        }
    },
    {
        id: "ballsort",
        title: "Color Ball Puzzle Sorting Game",
        date: "2021",
        image: "img/ColorBallSort3D/game_logo.png",
        labels: ["C#", "Unity", "Animations", "GitHub", "Level Design", "Level Generation"],
        summary: "A fun and challenging game with 10,000 levels where players sort colored balls into tubes. The game is designed to test and improve problem-solving skills as players work through increasingly difficult levels.",
        images: ["img/ColorBallSort3D/game_Cover.png"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.playspare.colorballsort3d",
        description: {
            overview: "An addictive puzzle game where players sort colored balls into tubes using logic and strategy. With thousands of levels, it provides endless entertainment while exercising problem-solving skills.",
            features: [
                "10,000+ unique puzzle levels",
                "Intuitive tap-and-drop controls",
                "Progressive difficulty curve",
                "Unlimited undo functionality",
                "Hint system for challenging levels",
                "No time pressure - play at your pace",
                "Colorful and appealing 3D graphics"
            ],
            technicalHighlights: [
                "Automated level generation system",
                "Efficient ball physics simulation",
                "Optimized rendering for 3D objects",
                "Smart difficulty adjustment algorithms",
                "Smooth animation systems"
            ],
            challenges: [
                "Creating 10,000 unique and solvable levels",
                "Balancing difficulty progression across levels",
                "Optimizing 3D performance for mobile devices",
                "Implementing intuitive sorting mechanics"
            ]
        }
    },
    {
        id: "watersort",
        title: "Color Water Sort 3D",
        date: "2021", 
        image: "img/ColorWaterSort3D/color water sort logo.PNG",
        labels: ["C#", "Unity", "Animations", "GitHub"],
        summary: "A fun and challenging game with 10,000 levels where players sort colored water into tubes. The game is designed to test and improve problem-solving skills as players work through increasingly difficult levels.",
        images: ["img/ColorWaterSort3D/WaterSort_Cover.png"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.playspare.watersort3d&hl=en",
        appStoreUrl: "https://apps.apple.com/us/app/color-water-sort-puzzle-3d/id1566301002",
        description: {
            overview: "A visually stunning water sorting puzzle game featuring realistic fluid animations. Pour colored water between tubes to separate colors and solve increasingly complex puzzles.",
            features: [
                "10,000+ challenging water sorting levels",
                "Realistic water flow animations",
                "Beautiful 3D graphics and effects",
                "Intuitive pouring mechanics",
                "Progressive difficulty system",
                "Relaxing gameplay experience",
                "Available on both mobile platforms"
            ],
            technicalHighlights: [
                "Advanced fluid simulation systems",
                "Realistic water physics and animations",
                "Optimized 3D rendering pipeline",
                "Efficient level generation algorithms",
                "Cross-platform deployment"
            ],
            challenges: [
                "Creating realistic water flow animations",
                "Optimizing fluid physics for mobile devices",
                "Designing intuitive pouring controls",
                "Maintaining performance across platforms"
            ]
        }
    }
];

// Site configuration
const config = {
    title: "Abdul Rehman | Professional Portfolio",
    url: "https://AbdulRehmanUnity.github.io",
    baseurl: "",
    theme: "default.css",
    rougeTheme: "github.css"
};