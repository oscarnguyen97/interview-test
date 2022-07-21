import Slider from "./Components/Slider"
import Jokes from "./Components/Jokes"
import { Container } from "./styled"

const Body = () => {
    return (
        <>
        <Container>
            <Slider />
            <Jokes />
        </Container>
        </>
    )
}

export default Body