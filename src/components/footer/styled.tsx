import React from "react";
import { Box, Stack, styled } from "@mui/material";
import { MotionBoxType, MotionStackType } from "../../types/app.type";

export const Footerbox: React.FC<MotionBoxType> = styled(Box)(
    ({ theme }) => ({
        padding: "var(--sectionMargin) 0 0",
        background: "#000",
        [theme.breakpoints.up("laptop")]: {
            padding: "calc(3 * var(--sectionMargin)) 0 0",
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
        borderTop: "1px dashed rgba(219, 219, 219, 0.5)",
        borderBottom: "1px dashed rgba(219, 219, 219, 0.5)",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            gap: "calc(2 * var(--flexGap))",
            padding: "calc(4 * var(--cardPadding)) 0",
        }
    })
)

export const ContactStack: React.FC<MotionStackType> = styled(Stack)(
    ({ theme }) => ({
        flexDirection: "column",
        gap: "var(--flexGap)",
        justifyContent: "space-between",
        margin: "0 var(--pagePadding)",
        padding: "calc(2 * var(--cardPadding)) 0",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            gap: "calc(2 * var(--flexGap))",
        }
    })
)

export const CopyrightBox:React.FC<MotionBoxType> = styled(Box)(
    ({theme}) => ({
        margin: "0 var(--pagePadding)",
        padding: "var(--cardPadding) 0",
        borderTop: "1px dashed rgba(219, 219, 219, 0.5)",
    })
)