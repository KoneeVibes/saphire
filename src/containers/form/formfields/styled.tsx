import { styled } from "@mui/material";

export const Form = styled("form")(
    ({ theme }) => ({
        display: "flex",
        gap: "var(--flexGap)",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        overflow: "hidden",
        padding: "calc(2 * var(--cardPadding)) 0",
        "& input, & textarea": {
            width: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
        },
        "& label": {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "inline-block",
            width: "100%",
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
    })
)