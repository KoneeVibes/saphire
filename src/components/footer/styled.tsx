import React from "react";
import { Stack, styled } from "@mui/material";
import { MotionStackType } from "../../types/app.type";

export const Footerbox: React.FC<{ children: React.ReactNode }> = styled("footer")(
    ({ theme }) => ({
        margin: "var(--sectionMargin) 0 0",
        background: "#000",
        [theme.breakpoints.up("laptop")]: {
            margin: "calc(2 * var(--sectionMargin)) 0 0",
        }
    })
)

export const WorkWithUsStack: React.FC<MotionStackType> = styled(Stack)(
    ({ theme }) => ({
        flexDirection: "column",
        gap: "var(--flexGap)",
        justifyContent: "space-between",
        margin: "0 var(--pagePadding)",
        padding: "var(--cardPadding) 0",
        background: "#000",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            gap: "calc(2 * var(--flexGap))",
            padding: "calc(2 * var(--cardPadding)) 0",
        }
    })
)