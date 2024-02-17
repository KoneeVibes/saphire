import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const RelatedBox = styled(Box)(
    ({ theme }) => ({
        "& .carousel .slider-wrapper.axis-horizontal .slider": {
            gap: "0.5rem",
        },
    })
)