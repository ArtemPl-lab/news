const { default: LikedNews } = require("../components/News/LikedNews")
import { Container, Typography } from "@material-ui/core";
const liked = () => {
    return (
        <>
            <Container>
                <Typography>
                    <h1>Понравившиеся новости</h1>
                </Typography> 
            </Container>
            <LikedNews />
        </>
    );
}
export default liked;