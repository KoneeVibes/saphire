import { motion } from "framer-motion";
import "./style.css";

export const FooterForm = ({ fields }: { fields: (string | string[])[] }) => {
    return (
        <motion.form
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            {Array.isArray(fields) && fields.map((field: any, k) => {
                return (
                    <input
                        key={k}
                        placeholder={field}
                    />
                )
            })}
        </motion.form>
    )
}