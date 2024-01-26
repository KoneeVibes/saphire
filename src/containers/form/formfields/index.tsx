import { Box, Typography } from "@mui/material";
import { formFields } from "../../../configs/content";
import { Form } from "./styled";

export const Formbox: React.FC<{}> = () => {
    return (
        <Box
            padding={"var(--cardPadding) var(--pagePadding)"}
        >
            <Typography
                variant="h2"
                whiteSpace={"normal"}
            >
                Ready to do big things? Fill out our form below
                and tell us about your vision.
            </Typography>
            <Form>
                {formFields.map((field, k) => {
                    return (
                        <fieldset key={k}>
                            <label htmlFor={field.split(' ').join('')}>{field}</label><br />
                            {(field.includes("Tell Us About")) ?
                                <textarea id={field.split(' ').join('')} name={field.split(' ').join('')} />
                                :
                                <input id={field.split(' ').join('')} type="text" style={{ width: "stretch" }} />
                            }
                        </fieldset>
                    )
                })}
            </Form>
        </Box>
    )
}