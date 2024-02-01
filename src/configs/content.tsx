import wurlet from "../assets/wurlet.svg";
import chaindustry from "../assets/chaindustry.svg";
import artlet from "../assets/artlet.svg";
import wurletheader from "../assets/wurletheader.svg";
import dotoearnheader from "../assets/dotoearnheader.svg";

export const navLinks = [
    {
        name: "Work",
        url: "#"
    },
    {
        name: "About",
        url: "#"
    },
    {
        name: "Work with us",
        url: "#"
    },
    {
        name: "Contact",
        url: "#"
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
    },
    {
        title: "Do To Earn",
        bgImage: chaindustry,
        headerImg: dotoearnheader,
        bgColor: "#C19FFF",
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