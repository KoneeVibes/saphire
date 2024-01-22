import { Card, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import { caseStudies } from "../../configs/content";
import { LinkTo } from "../../assets";
import { CaseStudiesBox, CaseStudiesStack } from "./styled";
import { motion } from "framer-motion";

export const CaseStudies: React.FC<{}> = () => {
    return (
        <CaseStudiesBox
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
                            <CardMedia
                                sx={{ height: 140 }}
                                image={caseStudy.bgImage}
                            />
                            <CardActions
                                sx={{
                                    background: caseStudy.bgColor
                                }}
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
                                <IconButton>
                                    <LinkTo />
                                </IconButton>
                            </CardActions>
                        </Card>
                    )
                })}
            </CaseStudiesStack>
        </CaseStudiesBox>
    )
}