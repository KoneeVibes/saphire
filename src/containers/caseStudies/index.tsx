import { Card, CardActionArea, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import { caseStudies } from "../../configs/content";
import { LinkTo } from "../../assets";
import { CaseStudiesBox, CaseStudiesStack } from "./styled";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CaseStudies: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <CaseStudiesBox
            id="casestudies"
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={400}
                fontSize={{ mobile: 36, desktop: 60 }}
                lineHeight={"normal"}
            >
                Case Studies
            </Typography>
            <CaseStudiesStack
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            >
                {caseStudies.map((caseStudy, k) => {
                    return (
                        <Card
                            key={k}
                            sx={{
                                flex: `1 1 calc(100%/${caseStudies.length})`,
                                borderRadius: "15px",
                                boxShadow: "none",
                            }}
                        >
                            <CardActionArea
                                onClick={
                                    () => navigate(`/casestudies/${caseStudy.title
                                        .split(" ")
                                        .join("")
                                        .toLowerCase()}`)
                                }
                            >
                                <CardMedia
                                    sx={{ height: 405 }}
                                    image={caseStudy.bgImage}
                                />
                            </CardActionArea>
                            <CardActions
                                sx={{
                                    background: caseStudy.bgColor,
                                    padding: { mobile: "var(--cardPadding)", laptop: "0 var(--cardPadding)" },
                                    minHeight: { laptop: 107 }
                                }}
                                onClick={
                                    () => navigate(`/casestudies/${caseStudy.title
                                        .split(" ")
                                        .join("")
                                        .toLowerCase()}`)
                                }
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily={"Helvetica Neue"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 20, laptop: 25 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                >
                                    {caseStudy.title}
                                </Typography>
                                <IconButton
                                    onClick={
                                        () => navigate(`/casestudies/${caseStudy.title
                                            .split(" ")
                                            .join("")
                                            .toLowerCase()}`)
                                    }
                                >
                                    <LinkTo />
                                </IconButton>
                            </CardActions>
                        </Card>
                    )
                })}
            </CaseStudiesStack>
        </CaseStudiesBox >
    )
}