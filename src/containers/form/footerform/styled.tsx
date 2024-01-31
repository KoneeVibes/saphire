import React from "react";
import { Box, styled } from "@mui/material";
import { MotionBoxType } from "../../../types/app.type";

export const Form: React.FC<MotionBoxType> = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: "var(--flexGap)",
        "& input": {
            background: "transparent",
            outline: "none",
            border: "none",
            borderBottom: "1px solid #8A8474",
            fontFamily: "Helvetica Neue",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "normal",
            color: "#8A8474",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            [theme.breakpoints.up("laptop")]: {
                fontSize: 22
            }
        },
        "& fieldset": {
            padding: 0,
            margin: 0,
            border: "none",
            display: "flex"
        },
        [theme.breakpoints.down("laptop")]: {
            alignItems: "flex-start",
            width: "fit-content",
        },
        [theme.breakpoints.down(200)]: {
            overflow: "hidden",
            width: "100%",
        }
    })
)