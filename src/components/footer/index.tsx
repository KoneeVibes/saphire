import { ContactStack, Footerbox, WorkWithUsStack, CopyrightBox } from "./styled";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { footerItems, workWithUsStackItems } from "../../configs/content";
import { Contactbox } from "../../containers/contactBox";
import { FooterForm } from "../../containers/form/footerform";

export const Footer: React.FC<{}> = () => {
    return (
        <Footerbox
            id="contact"
            component={motion.footer}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <WorkWithUsStack
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            >
                {workWithUsStackItems.map((item, k) => {
                    return (
                        <Typography
                            key={k}
                            variant={item.body.includes("Work") ? "h2" : "body1"}
                            color={"#F3F3F3"}
                            whiteSpace={"normal"}
                            fontFamily={"Helvetica Neue"}
                            fontWeight={300}
                            fontSize={item.body.includes("Work") ? { mobile: 40, miniTablet: 47 } : { mobile: 18, miniTablet: 22 }}
                            lineHeight={"normal"}
                            width={item.width}
                        >
                            {item.body}<br />{item.contact}
                        </Typography>
                    )
                })}
            </WorkWithUsStack>
            <ContactStack
                component={motion.div}
                initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
                whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
            >
                {footerItems.map((item, key) => {
                    return (
                        <Box
                            key={key}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"var(--flexGap)"}
                            flexBasis={"25%"}
                        >
                            <Typography
                                key={key}
                                variant="h2"
                                color={"#F3F3F3"}
                                fontFamily={"Helvetica Neue"}
                                fontWeight={400}
                                fontSize={{ mobile: 22, miniTablet: 28 }}
                                lineHeight={"normal"}
                                whiteSpace={"normal"}
                            >
                                {item.title}
                            </Typography>
                            {(() => {
                                switch (key) {
                                    case 0:
                                        return <Contactbox body={item.body} />;
                                    case 1:
                                        return <Contactbox body={item.body} />;
                                    case 2:
                                        return <FooterForm fields={item.body} />
                                    case 3:
                                        return <Contactbox body={item.body} />;
                                    default:
                                        return null;
                                }
                            })()}
                        </Box>
                    )
                })}
            </ContactStack>
            <CopyrightBox>
                <Typography
                    color={"#8A8474"}
                    fontFamily={"Helvetica Neue"}
                    fontWeight={300}
                    fontSize={14}
                    lineHeight={"normal"}
                >
                    © 2023 We Are Saphire. All Rights Reserved.
                </Typography>
            </CopyrightBox>
        </Footerbox >
    )
}