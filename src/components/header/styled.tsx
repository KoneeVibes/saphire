import React from "react";
import { Box, Stack, styled } from "@mui/material";
import { BgImageBoxType, MotionBoxType, MotionStackType } from "../../types/app.type";

export const Headerbox: React.FC<MotionBoxType> = styled(Box)(
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

export const BgImageBox: React.FC<BgImageBoxType> = styled(Box) <{ bg: string, borderRadius: number, minHeight: number }>`
    ${({ theme, bg, borderRadius, minHeight }) => {
        return {
            backgroundImage: bg,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: borderRadius,
            minHeight: minHeight,
            position: "relative",
            [theme.breakpoints.up("mobile")]: {
                backgroundPosition: "top",
            },
            [theme.breakpoints.up("laptop")]: {
                backgroundPosition: "bottom left",
            },
        }
    }}
`

export const HeaderStack: React.FC<MotionStackType> = styled(Stack)`
    ${({ theme }) => ({
        borderTop: "1px solid #B7B7B7",
        borderBottom: "1px solid #B7B7B7",
        gap: "var(--flexGap)",
        [theme.breakpoints.up("mobile")]: {
            flexDirection: "column",
            marginTop: "var(--sectionMargin)",
            padding: "calc(2 * var(--cardPadding)) var(--pagePadding)"
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            marginTop: "unset",
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(4 * var(--cardPadding)) var(--pagePadding)"
        }
    })}
`