import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Contactbox = ({ body }: { body: (string | string[])[] }) => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            display={"flex"}
            flexDirection={"column"}
            gap={".5rem"}
        >
            {body.map((item, key) => {
                switch (key) {
                    case 0:
                        return (
                            <Box
                                key={key}
                                display={"flex"}
                                flexDirection={"column"}
                                paddingBottom={item === "Lagos , Nigeria." ? "var(--cardPadding)" : ""}
                            >
                                {
                                    Array.isArray(item) ?
                                        (<Stack
                                            direction={{ laptop: "row" }}
                                            gap={".5rem"}
                                        >
                                            {item.map((subItem: string, subKey: number) => (
                                                <Typography
                                                    key={subKey}
                                                    variant="subtitle1"
                                                    color={(subKey === 2) ? "#8A8474" : "#F3F3F3"}
                                                    flex={1}
                                                    fontFamily={"Helvetica Neue"}
                                                    fontWeight={300}
                                                    fontSize={{ mobile: 18, miniTablet: 22 }}
                                                    lineHeight={"normal"}
                                                >
                                                    {subItem}
                                                </Typography>
                                            ))}
                                        </Stack>
                                        ) : (
                                            <Typography
                                                variant="subtitle1"
                                                color={"#F3F3F3"}
                                                fontFamily={"Helvetica Neue"}
                                                fontWeight={300}
                                                fontSize={{ mobile: 18, miniTablet: 22 }}
                                                lineHeight={"normal"}
                                            >
                                                {item}
                                            </Typography>
                                        )
                                }
                            </Box>
                        )
                    case 1:
                        return Array.isArray(item) ?
                            (<Stack
                                key={key}
                                direction={{ laptop: (item[0] === "Monday → Friday") ? "column" : "row" }}
                                gap={".5rem"}
                            >
                                {item.map((subItem: string, subKey: number) => (
                                    <Typography
                                        key={subKey}
                                        variant="subtitle1"
                                        color={(subKey === 2) ? "#8A8474" : "#F3F3F3"}
                                        flex={1}
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={300}
                                        fontSize={{ mobile: 18, miniTablet: 22 }}
                                        lineHeight={"normal"}
                                    >
                                        {subItem}
                                    </Typography>
                                ))}
                            </Stack>
                            ) : (
                                <Typography
                                    variant="subtitle1"
                                    color={"#F3F3F3"}
                                    fontFamily={"Helvetica Neue"}
                                    fontWeight={300}
                                    fontSize={{ mobile: 18, miniTablet: 22 }}
                                    lineHeight={"normal"}
                                >
                                    {item}
                                </Typography>
                            )
                    case 2:
                        return Array.isArray(item) ?
                            (<Stack
                                key={key}
                                direction={{ laptop: "row" }}
                                gap={".5rem"}
                            >
                                {item.map((subItem: string, subKey: number) => (
                                    <Typography
                                        key={subKey}
                                        variant="subtitle1"
                                        color={(subKey === 2) ? "#8A8474" : "#F3F3F3"}
                                        flex={1}
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={300}
                                        fontSize={{ mobile: 18, miniTablet: 22 }}
                                        lineHeight={"normal"}
                                    >
                                        {subItem}
                                    </Typography>
                                ))}
                            </Stack>
                            ) : (
                                <Typography
                                    variant="subtitle1"
                                    color={"#F3F3F3"}
                                    fontFamily={"Helvetica Neue"}
                                    fontWeight={300}
                                    fontSize={{ mobile: 18, miniTablet: 22 }}
                                    lineHeight={"normal"}
                                >
                                    {item}
                                </Typography>
                            )
                    default:
                        return null;
                }
            })}
        </Box>
    )
}
