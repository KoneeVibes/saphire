import { Typography, useMediaQuery } from "@mui/material";
import { caseStudies } from "../../configs/content";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BgImageBox } from "../../components/header/styled";
import { RelatedBox } from "./styled";

export const Related: React.FC<{ activeCaseStudy: string | undefined }> = ({ activeCaseStudy }) => {
    const matches = useMediaQuery('(min-width:768px)');
    const relatedCategory = caseStudies
        .filter(caseStudy =>
            caseStudy.title
                .split(" ")
                .join("")
                .toLowerCase() !== activeCaseStudy
        )
        .map(({ bgImage, title }) => ({
            thumbnail: bgImage,
            url: title,
        }));
    return (
        <RelatedBox
            sx={{
                padding: "var(--sectionMargin) var(--pagePadding) calc(4 * var(--sectionMargin))",
            }}
        >
            <Typography
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                lineHeight={"normal"}
                fontSize={{ mobile: 50, tablet: 70, laptop: 80, desktop: 100 }}
                letterSpacing={"-6%"}
                color={"rgba(0, 0, 0, 1)"}
                marginBlockEnd={"2rem"}
            >
                Related
            </Typography>
            <Carousel
                autoPlay={true}
                autoFocus={true}
                infiniteLoop={true}
                interval={2000}
                emulateTouch={true}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={matches ? 65 : 100}
            >
                {relatedCategory.map((caseStudy, key) => {
                    return (
                        <BgImageBox
                            key={key}
                            bg={`url(${caseStudy?.thumbnail})` ?? ""}
                            borderRadius={15}
                            minHeight={515}
                        />
                    )
                })}
            </Carousel>
        </RelatedBox>
    )
}