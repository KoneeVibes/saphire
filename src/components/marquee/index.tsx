import Marquee from "react-fast-marquee";
import { MarqueeBoxType } from "../../types/app.type";

export const MarqueeBox: React.FC<MarqueeBoxType> = ({ content, pauseOnClick, pauseOnHover, bg, border, padding }) => {
    return (
        <Marquee
            autoFill={true}
            pauseOnClick={pauseOnClick || false}
            pauseOnHover={pauseOnHover || false}
            style={{
                background: bg || "transparent",
                border: border || "none",
                padding: padding || "0",
            }}
        >
            {content}
        </Marquee>
    )
}