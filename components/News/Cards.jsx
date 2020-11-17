import { Container, Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
const Cards = () => {

    return(
    <Container>
        <Grid spacing={3} container>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <NewsCard />
          </Grid>
        </Grid>
    </Container>
    );
}
export default Cards;