import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardActionArea } from '@material-ui/core';
import Link from 'next/link';
import { useStore } from "mobx-store-provider";
import { observer } from 'mobx-react';
const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }
}));

const NewsCard = ({post}) => {
  const { postsStore, user } = useStore();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if(!post) return <></>
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          user.userToken ? 
        <IconButton aria-label="settings">
          <MoreVertIcon /> 
        </IconButton> : ()=>{}
        }
        title={post.newsTitle.slice(0, 30)}
        subheader={post.added_at}
      />
      <Link href={`/postPage/${post.newsUrl}`}>
        <CardActionArea>
            <CardMedia 
                className="media"
                image="https://material-ui.com/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.newsContent.slice(0,50)}...
                </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"   color={post.isLiked ? "primary" : "action"} onClick={()=>postsStore.togleLike(post)}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{post.newsContent.slice(50, 500)}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default observer(NewsCard);