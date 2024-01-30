import { Box, Stack, styled } from "@mui/material";
import { MotionBoxType, MotionStackType } from "../../types/app.type";

export const CaseStudiesBox: React.FC<MotionBoxType> = styled(Box)(
    () => ({
        padding: "0 var(--pagePadding)",
    })
);

export const CaseStudiesStack: React.FC<MotionStackType> = styled(Stack)(
    ({ theme }) => ({
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "var(--flexGap)",
        overflowY: "hidden",
        padding: "calc(2 * var(--cardPadding)) 0",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row"
        }
    })
)