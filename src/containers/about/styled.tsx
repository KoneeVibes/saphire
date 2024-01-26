import { Box, Stack, styled } from "@mui/material";
import { MotionBoxType, MotionStackType } from "../../types/app.type";

export const AboutBox: React.FC<MotionBoxType> = styled(Box)`
    ${({theme}) => ({
        borderTop: "1px solid #B7B7B7",
        borderBottom: "1px solid #B7B7B7",
        padding: "var(--cardPadding) var(--pagePadding) calc(2 * var(--cardPadding))",
        [theme.breakpoints.down("laptop")]:{
            padding: "var(--cardPadding) var(--pagePadding) calc(1.5 * var(--cardPadding))",
        }
    })}
`

export const AboutStack: React.FC<MotionStackType> = styled(Stack)(
    ({ theme }) => ({
        padding: "var(--cardPadding) 0 0",
        gap: "var(--flexGap)",
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(2 * var(--cardPadding)) 0 0",
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
        },
    })
)