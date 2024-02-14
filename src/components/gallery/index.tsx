import React from "react";
import { Stack } from "@mui/material";
import { GalleryPropsType } from "../../types/app.type";

export const Gallery: React.FC<GalleryPropsType> = ({ rows, gap }) => {
    return (
        <Stack
            gap={gap}
        >
            {rows.map((rowItem, i) => {
                return (
                    <React.Fragment
                        key={i}
                    >
                        {rowItem}
                    </React.Fragment>
                )
            })}
        </Stack>
    )
}