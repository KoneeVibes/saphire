import { Typography } from "@mui/material";
import { formFields } from "../../../configs/content";
import { Form } from "./styled";

export const Formbox: React.FC<{}> = () => {
    return (
        <Form
            id="workwithus"
        >
            <Typography
                variant="h2"
                whiteSpace={"normal"}
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                lineHeight={"normal"}
                fontSize={{ mobile: 22, miniTablet: 27, tablet: 35, desktop: 41 }}
                width={{ laptop: "70%" }}
            >
                Ready to do big things? Fill out our form below
                and tell us about your vision.
            </Typography>
            <form>
                {formFields.map((field, k) => {
                    return (
                        <fieldset
                            key={k}
                            className={(field.includes("Tell Us About")) ? "fullWidth" : ""}
                        >
                            <label htmlFor={field.split(' ').join('')}>{field}</label><br />
                            {(field.includes("Tell Us About")) ?
                                <textarea id={field.split(' ').join('')} name={field.split(' ').join('')} rows={7} />
                                :
                                <input id={field.split(' ').join('')} type="text" style={{ width: "stretch" }} />
                            }
                        </fieldset>
                    )
                })}
            </form>
        </Form>
    )
}