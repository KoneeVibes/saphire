import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

export const MarqueeBox: React.FC<{}> = () => {
    return (
        <Marquee
            autoFill={true}
            style={{
                background: "#E4E4E4",
                border: "0.3px dashed #000",
            }}
        >
            <Typography
                fontFamily={"Helvetica Neue"}
                fontWeight={400}
                fontSize={15}
                lineHeight={1.8}
                color={"#3A3A3A"}
                textTransform={"uppercase"}
                padding={"1rem 0"}
            >
                Saphire partners with business to be industry captains <Typography component={"span"} padding={"0 0.5rem"}>&#8594;</Typography>
            </Typography>
        </Marquee>
    )
}