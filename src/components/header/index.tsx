import { Headerbox } from "./styled";
import { Box, Card, CardActions, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { HeaderType } from "../../types/app.type";

export const Header: React.FC<HeaderType> = ({ headerPhoto, cardTitle, cardContent, cardActionButton, headerText }) => {
    return (
        <Headerbox>
            <Box
                padding={"0 var(--pagePadding)"}
            >
                {headerText}
                <Box
                    sx={{
                        backgroundImage: `url(${headerPhoto})`,
                        backgroundPosition: { mobile: "top", laptop: "bottom left" },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: 8,
                        minHeight: 878,
                        position: "relative",
                    }}
                >
                    <Card className="card">
                        <CardHeader title={cardTitle} />
                        <CardContent>{cardContent}</CardContent>
                        <CardActions>{cardActionButton}</CardActions>
                    </Card>
                </Box>
            </Box>
            <Stack
                direction={{ mobile: "column", tablet: "row" }}
                padding={{ mobile: "calc(2 * var(--cardPadding)) var(--pagePadding)", laptop: "calc(4 * var(--cardPadding)) var(--pagePadding)" }}
                gap={"var(--flexGap)"}
                marginTop={{ mobile: "var(--sectionMargin)", tablet: "unset" }}
                borderTop={"1px solid #B7B7B7"}
                borderBottom={"1px solid #B7B7B7"}
            >
                <Box
                    flex={"1 1 20%"}
                >
                    <Typography
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#8A8474"}
                        whiteSpace={"normal"}
                    >
                        Working worlwide for →
                    </Typography>
                </Box>
                <Box
                    flex={"1 1 20%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Cultural Heritage
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Creative Design
                    </Typography>
                </Box>
                <Box
                    flex={"1 1 20%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Community
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Not-For-Profit
                    </Typography>
                </Box>
                <Box
                    flex={"1 1 20%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Architectural Innovations
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={22.419}
                        lineHeight={"normal"}
                        color={"#000000"}
                        whiteSpace={"normal"}
                    >
                        Public Services
                    </Typography>
                </Box>
            </Stack>
        </Headerbox>
    )
}