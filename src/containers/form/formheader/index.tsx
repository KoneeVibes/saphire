import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Separator } from "../../../assets";

export const FormHeader = () => {
    const matches = useMediaQuery('(max-width:768px)');
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            gap={".5rem"}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                fontSize={"15vw"}
                lineHeight={"normal"}
                letterSpacing={"-.5vw"}
            >
                WORK
            </Typography>
            <Separator style={{ maxHeight: matches ? "70px" : "unset", width: "auto" }} />
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                fontSize={"15vw"}
                lineHeight={"normal"}
                letterSpacing={"-.5vw"}
            >
                WITH US
            </Typography>
            <Separator style={{ maxHeight: matches ? "70px" : "unset", width: "auto" }} />
        </Stack>
    )
}