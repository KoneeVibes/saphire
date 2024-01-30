import { Box, styled } from "@mui/material";
import { MotionBoxType } from "../../types/app.type";

export const BgBox: React.FC<MotionBoxType> = styled(Box)(
    ({ theme }) => ({
        margin: "var(--sectionMargin) 0 0",
        [theme.breakpoints.up("laptop")]: {
            margin: "calc(2 * var(--sectionMargin)) 0 0",
        }
    })
)