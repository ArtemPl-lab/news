import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Jumbtorn() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={`${classes.mainFeaturedPost} jumbtorn`} >
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      <div className="overlay-j" />
      <Grid container>
        <Grid item md={6}>
          <div className={`${classes.mainFeaturedPostContent} `}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Главные новости в сфере бизнеса и франчайзинга
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              На нашем сайте Вы можете прочитать все актуальные новости о бизнесе, новости о франчайзинге, отзывы владельцев о франшизах. Каталог новостей пополняется ежедневно, будьте всегда в курсе новых событий!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
    </ThemeProvider>
  );
}