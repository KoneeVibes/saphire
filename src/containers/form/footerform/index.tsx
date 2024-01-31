import { motion } from "framer-motion";
import { Form } from "./styled";
import { IconButton } from "@mui/material";
import { Send } from "../../../assets";

export const FooterForm = ({ fields }: { fields: (string | string[])[] }) => {
    return (
        <Form
            component={motion.form}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            {Array.isArray(fields) &&
                fields.map((field: any, k) => (
                    k === 0 ? (
                        <input
                            key={k}
                            placeholder={field}
                        />
                    ) : (
                        <fieldset key={k}>
                            <input
                                placeholder={field}
                            />
                            <IconButton>
                                <Send />
                            </IconButton>
                        </fieldset>
                    )
                ))}
        </Form>
    )
}