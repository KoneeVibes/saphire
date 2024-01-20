import { Container } from "@mui/material"
import { Nav } from "../../components/navigation"
import { MarqueeBox } from "../../components/marquee"
import { Header } from "../../containers/header"

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Container
                sx={{
                    padding: "0",
                    overflowX: "hidden"
                }}
            >
                <Nav />
                <MarqueeBox />
            </Container>
            <Container
                sx={{
                    padding: "0 var(--pagePadding)",
                    overflowX: "hidden"
                }}
            >
                <Header />
            </Container>
        </>
    )
}