import { Container } from "@mui/material"
import { Nav } from "../../components/navigation"

export const Home: React.FC<{}> = () => {
    return (
        <Container
            sx={{
                padding: "var(--cardPadding) var(--pagePadding)"
            }}
        >
            <Nav />
        </Container>
    )
}