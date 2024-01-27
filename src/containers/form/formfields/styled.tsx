import { Box, styled } from "@mui/material";
import { MotionBoxType } from "../../../types/app.type";

export const Form: React.FC<MotionBoxType> = styled(Box)(
    ({ theme }) => ({
        padding: "var(--cardPadding) var(--pagePadding)",
        "& form": {
            display: "flex",
            gap: "var(--flexGap)",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
            overflow: "hidden",
            padding: "calc(2 * var(--cardPadding)) 0",
            "& input, & textarea": {
                width: "100%",
                padding: "var(--cardPadding)",
                overflow: "hidden",
                boxSizing: "border-box",
                borderRadius: "10px",
                border: "1px solid #D9D9D9",
            },
            "& label": {
                overflow: "hidden",
                whiteSpace: "normal",
                textOverflow: "ellipsis",
                display: "inline-block",
                width: "100%",
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "normal"
            },
            "& fieldset": {
                flex: "1 1 440px",
                padding: "0",
                border: "none",
                [theme.breakpoints.down("laptop")]: {
                    flex: "1 1 100%",
                    minInlineSize: "stretch",
                }
            },
            "& .fullWidth": {
                flex: "1 1 100% !important",
            },
            [theme.breakpoints.down("tablet")]: {
                padding: "var(--cardPadding) 0",
            }
        }
    })
)