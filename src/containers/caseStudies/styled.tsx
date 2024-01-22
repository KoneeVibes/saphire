import { Box, Stack, styled } from "@mui/material";
import { MotionBoxType, MotionStackType } from "../../types/app.type";

export const CaseStudiesBox: React.FC<MotionBoxType> = styled(Box)();

export const CaseStudiesStack: React.FC<MotionStackType> = styled(Stack)(
    ({ theme }) => ({
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "calc(1.5 * var(--flexGap))",
        padding: "calc(2 * var(--cardPadding)) 0",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row"
        }
    })
)