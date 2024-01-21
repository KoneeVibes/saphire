import { Box, styled } from "@mui/material";

export const Headerbox = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        margin: "0 0 var(--sectionMargin)",
        "& .card": {
            position: "absolute",
            width: "fit-content",
            bottom: 0,
            boxShadow: "none",
            background: "transparent",
            "& .MuiCardHeader-content": {
                width: "100%"
            },
            [theme.breakpoints.down("laptop")]: {
                width: "100%",
                borderRadius: "15px",
                background: "#F5F5DC",
            },
            [theme.breakpoints.between(570, 1024)]: {
                minHeight: "185px",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            gap: "calc(var(--flexGap)/2)",
        }
    })
)