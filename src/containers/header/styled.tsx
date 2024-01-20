import { Box, styled } from "@mui/material";

export const Headerbox = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        margin: "0 0 var(--sectionMargin)",
        [theme.breakpoints.up("tablet")]: {
            gap: "calc(var(--flexGap)/2)",
        }
    })
)