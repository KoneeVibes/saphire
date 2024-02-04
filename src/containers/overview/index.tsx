import { Box, Stack, Typography } from "@mui/material";
import { OverviewBodyType } from "../../types/app.type";
import { DetailStack, OverviewBox } from "./styled";
import { motion } from "framer-motion";

export const OverviewBody: React.FC<OverviewBodyType> = ({ details }) => {
    return (
        <OverviewBox>
            {details?.map((detail, k) => {
                return (
                    <Box
                        key={k}
                    >
                        <DetailStack
                            component={motion.div}
                            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                        >
                            <Box
                                flex={"1 1 40%"}
                            >
                                {detail.title.main &&
                                    <Typography
                                        variant="h2"
                                        whiteSpace={"normal"}
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={500}
                                        fontSize={{ mobile: 32, miniTablet: 39, tablet: 45, laptop: 50 }}
                                        lineHeight={"normal"}
                                    >
                                        {detail.title.main}
                                    </Typography>
                                }
                                {detail.title.number &&
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={500}
                                        fontSize={{ mobile: 25 }}
                                        lineHeight={"normal"}
                                    >
                                        {detail.title.number}
                                    </Typography>
                                }
                                {detail.title.subText &&
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={900}
                                        fontSize={{ mobile: 25 }}
                                        lineHeight={"normal"}
                                        marginBlockStart={"1rem"}
                                    >
                                        {detail.title.subText}
                                    </Typography>
                                }
                            </Box>
                            <Stack
                                flex={"1 1 60%"}
                                gap={"var(--flexGap)"}
                            >
                                {detail.body.map((item, key) => {
                                    return (
                                        <Box key={key}>
                                            {item.number &&
                                                <Typography
                                                    variant="h2"
                                                    fontFamily={"Helvetica Neue"}
                                                    fontWeight={500}
                                                    fontSize={{ mobile: 25 }}
                                                    lineHeight={"normal"}
                                                    color={"#363636"}
                                                >
                                                    {item.number}
                                                </Typography>
                                            }
                                            {item.subtitle &&
                                                <Typography
                                                    variant="subtitle1"
                                                    fontFamily={"Helvetica Neue"}
                                                    fontWeight={900}
                                                    fontSize={{ mobile: 25 }}
                                                    lineHeight={"normal"}
                                                    marginBlock={"1rem"}
                                                    color={"#070707"}
                                                >
                                                    {item.subtitle}
                                                </Typography>
                                            }
                                            <Typography
                                                variant="body1"
                                                whiteSpace={"normal"}
                                                fontFamily={"Helvetica Neue"}
                                                fontWeight={400}
                                                fontSize={{ mobile: 18 }}
                                                lineHeight={"normal"}
                                                color={"#5E5E63"}
                                            >
                                                {item.details}
                                            </Typography>
                                        </Box>
                                    )
                                })}
                            </Stack>
                        </DetailStack>
                        {detail.img}
                    </Box>
                )
            })}
        </OverviewBox>
    )
} 