import { Grid } from "@mui/material"
import { BgImageBox } from "../header/styled"

export const GalleryGrid: React.FC<{
    a: React.ReactNode, b: React.ReactNode, tabletA: number, tabletB: number
}> = ({ a, b, tabletA, tabletB }) => {
    return (
        <Grid
            container
            gap={"calc(var(--flexGap)/2)"}
            flexWrap={"nowrap"}
        >
            <Grid
                item
                mobile={tabletA}
            >
                <BgImageBox
                    bg={`url(${a})`}
                    borderRadius={32}
                    minHeight={411}
                />
            </Grid>
            <Grid
                item
                mobile={tabletB}
            >
                <BgImageBox
                    bg={`url(${b})`}
                    borderRadius={15}
                    minHeight={411}
                />
            </Grid>
        </Grid>
    )
}