import { Box, Typography } from "@mui/material";
import { Headerbox } from "./styled";
import Headerphoto from "../../assets/headerPhoto.svg";

export const Header: React.FC<{}> = () => {
    return (
        <Headerbox>
            <Typography
                fontFamily={"Helvetica Neue"}
                fontWeight={900}
                fontSize={{ mobile: "25.2vw", miniTablet: "23.8vw", tablet: "26.5vw", laptop: "27.5vw" }}
                lineHeight={{ mobile: "30vw", tablet: "22vw" }}
                display={"inline-block"}
                textTransform={"uppercase"}
                letterSpacing={"-1vw"}
                color={"#000"}
                width={"100%"}
                textAlign={{ mobile: "center", tablet: "unset" }}
            >
                SAPHIRE
            </Typography>
            <Box
                sx={{
                    backgroundImage: `url(${Headerphoto})`,
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: 8,
                    minHeight: 878,
                }}
            >

            </Box>
        </Headerbox>
    )
}