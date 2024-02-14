import { Box, Stack, styled } from "@mui/material";
import { MotionBoxType, MotionStackType } from "../../types/app.type";

export const OverviewBox: React.FC<MotionBoxType> = styled(Box)(
    ({ theme }) => ({
        padding: "0 var(--pagePadding)",
        margin: "var(--sectionMargin) 0",
        "svg": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    })
);

export const DetailStack: React.FC<MotionStackType> = styled(Stack)(
    ({ theme }) => ({
        padding: "var(--sectionMargin) 0",
        gap: "var(--flexGap)",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            padding: "calc(1.5 * var(--sectionMargin)) 0",
        }
    })
);