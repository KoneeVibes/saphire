import { styled } from "@mui/material";

export const Navbar = styled("nav")(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing(4),

        "& ul": {
            display: "flex",
            gap: theme.spacing(10),
            listStyleType: "none",
            paddingInlineStart: 0,
        },

        "& a": {
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#000000",
            textDecoration: "none",
        }
    })
)