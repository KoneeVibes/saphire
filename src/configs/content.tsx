import wurlet from "../assets/wurlet.svg";
import chaindustry from "../assets/chaindustry.svg";
import artlet from "../assets/artlet.svg";
import wurletheader from "../assets/wurletheader.svg";
import dotoearnheader from "../assets/dotoearnheader.svg";
import { DoToEarnImage, WurletImage } from "../assets";

export const navLinks = [
    {
        name: "Work",
        url: "#casestudies"
    },
    {
        name: "About",
        url: "#about"
    },
    {
        name: "Work with us",
        url: "#workwithus"
    },
    {
        name: "Contact",
        url: "#contact"
    }
]

export const stackDetails = [
    ["Cultural Heritage", "Creative Design"],
    ["Community", "Not-For-Profit"],
    ["Architectural Innovations", "Public Services"]
];

export const caseStudies = [
    {
        title: "Wurlet Security",
        bgImage: wurlet,
        headerImg: wurletheader,
        bgColor: "#F4D046",
        details: [
            {
                title: {
                    main: "Transforming zero-carbon mobility",
                    number: "",
                    subText: ""
                },
                body: [
                    {
                        number: "(01)",
                        subtitle: "Challenge",
                        details: "The task at hand is to create a secure and user- friendly platform that allows users to store their personal and business information in one place.The challenge is to make the platform intuitive and easy to use, while also ensuring the highest level of security for users' data. The goal is to make it easy for users to manage their information and feel confident that their data is safe and accessible."
                    }
                ],
                img: <WurletImage />
            },
            {
                title: {
                    main: "",
                    number: "(02)",
                    subText: "Solution"
                },
                body: [
                    {
                        number: "",
                        subtitle: "",
                        details: "We will create an intuitive and user-friendly platform that is built on a strong brand identity system. The brand identity system will include a comprehensive set of deliverables, including a logo, color palette, typography, and iconography. We will develop a cohesive system that is consistent across all touchpoints, including the web platform, mobile app, and marketing materials. This system will help to establish a strong and recognizable brand identity that will differentiate the company from competitors and create a lasting impression on users. The platform will be designed with the user's needs in mind, making it easy to navigate and understand. The platform will also offer advanced security features to ensure the safety of users' data. We will create a seamless user experience that builds trust and reliability, and promotes brand loyalty."
                    }
                ],
                img: ""
            },
        ]
    },
    {
        title: "Do To Earn",
        bgImage: chaindustry,
        headerImg: dotoearnheader,
        bgColor: "#C19FFF",
        details: [
            {
                title: {
                    main: "Transforming zero-carbon mobility",
                    number: "",
                    subText: ""
                },
                body: [
                    {
                        number: "(01)",
                        subtitle: "Problem",
                        details: "Our business identified a significant gap in the market: the untapped potential to monetize the various activities users perform online. To capitalize on this opportunity, we introduced a Do to Earn platform that offers tasks such as learning, sharing, watching, promoting, chatting, and even sleeping to earn rewards. However, we now face the challenge of creating a user-centric interface that seamlessly guides users through the diverse range of tasks while ensuring they can easily track their progress and claim rewards. Our goal is to design an intuitive and engaging platform that motivates users to complete tasks, fosters a sense of achievement, and maximizes user retention and satisfaction."
                    },
                    {
                        number: "(02)",
                        subtitle: "Insight",
                        details: "Most similar platforms succeed by offering a wide range of tasks, creating an intuitive interface, and promptly rewarding users. By implementing social engagement features and personalized incentives, we can boost user satisfaction and foster a sense of community. Striking the right balance with gamification and ensuring mobile optimization will enhance user engagement. Niche targeting and referral programs can attract dedicated users and drive organic growth. Prioritizing technical reliability will lead to a seamless user experience, building trust and loyalty. Incorporating these lessons into our design direction will likely result in a highly engaging and successful Do to Earn platform."
                    },
                ],
                img: <DoToEarnImage />
            },
            {
                title: {
                    main: "",
                    number: "(03)",
                    subText: "Solution"
                },
                body: [
                    {
                        number: "",
                        subtitle: "",
                        details: "Visual progress tracking and rewards display motivate users to complete tasks and earn rewards. Interactive elements and intuitive navigation enhance the overall user experience during task execution. Seamless integration with other platform features, such as the wallet and social components, creates a cohesive and immersive user journey. Regular user feedback and iterative improvements contribute to refining the task performance design for maximum user satisfaction."
                    }
                ],
                img: ""
            },
            {
                title: {
                    main: "",
                    number: "(03)",
                    subText: "Leader Board"
                },
                body: [
                    {
                        number: "",
                        subtitle: "",
                        details: "Visual progress tracking and rewards display motivate users to complete tasks and earn rewards. Interactive elements and intuitive navigation enhance the overall user experience during task execution. Seamless integration with other platform features, such as the wallet and social components, creates a cohesive and immersive user journey. Regular user feedback and iterative improvements contribute to refining the task performance design for maximum user satisfaction."
                    }
                ],
                img: ""
            },
        ]
    },
    {
        title: "Artlet",
        bgImage: artlet,
        bgColor: "#04EFFF",
    },
];

export const formFields = [
    "First Name", "Last Name", "Your Email", "Company Name", "Tell Us About The Project (Scope, Timeline, Budget):*"
];

export const workWithUsStackItems = [
    {
        body: "Work with us",
    },
    {
        body: "We're excited to discover your organization and assist in developing a unique and innovative visual strategy. Let's think outside the box together.",
        width: { laptop: "30%" }
    },
    {
        body: "You can contact us at:",
        contact: "info@saphire.com",
    },
];

export const footerItems = [
    {
        title: "Office",
        body: ["Lagos , Nigeria.", ["Monday → Friday", "9am to 6pm", "(UTC)"]],
    },
    {
        title: "Connect with us",
        body: ["info@Saphire.com"]
    },
    {
        title: "Join our newsletter",
        body: ["Name", "E-mail"]
    },
    {
        title: "Follow us",
        body: [["Instagram", "Behance"], ["Dribbble", "Linkedin"], ["Medium", "Spotify"]],
    }
];
