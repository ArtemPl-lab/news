import { Container, Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { observer } from 'mobx-react';
const Cards = observer(({ posts }) => {
    let p = [
      {
        url: 'url-1',
        date: 'September 14, 2016',
        title: 'Название',
        text: 'Бла-бла-бла'
      },
      {
        url: 'url-2',
        date: 'September 14, 2016',
        title: 'Названdffffffffие',
        text: 'Бла-dsfgdfgбла-бла'
      },
      {
        url: 'url-3',
        date: 'September 14, 2016',
        title: 'Название',
        text: 'Бла-бла-блsdsfgа'
      }
    ];
    return(
    <Container>
        <Grid spacing={3} container>
          {p.map(post => (
            <Grid item xs={12} md={3} sm={6} key={post.url}>
              <NewsCard post={post}/>
            </Grid>
          ))}
        </Grid>
    </Container>
    );
});
export default Cards;