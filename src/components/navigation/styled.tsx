import { styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Navbar = styled("nav")(
    ({ theme }) => {
        const { openMenu } = useContext(Context)
        return {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: theme.spacing(4),
            "& ul": {
                display: "flex",
                gap: theme.spacing(6),
                listStyleType: "none",
                paddingInlineStart: 0,
                [theme.breakpoints.down("tablet")]: {
                    display: openMenu ? "flex" : "none",
                    flexDirection: "column",
                    position: "fixed",
                    left: openMenu ? "0" : "-100%",
                    top: "calc(39px + var(--cardPadding))",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    gap: theme.spacing(12),
                    padding: "var(--sectionMargin) 0",
                    background: "#FFF",
                    zIndex: 10,
                }
            },
            "& a": {
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#000000",
                textDecoration: "none",
            },
            "& .logo": {
                [theme.breakpoints.down(165)]: {
                    display: "none",
                },
            }
        }
    }
)