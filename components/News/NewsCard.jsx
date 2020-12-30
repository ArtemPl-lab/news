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
import MenuCard from './menuCard';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const NewsCard = ({post}) => {
  const { postsStore, user } = useStore();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if(!post) return <></>
  // let url = new URL(post.resourceUrl);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            A
          </Avatar>
        }
        action={
          user.userToken ? 
        <MenuCard post={post} /> : ()=>{}
        }
        title={post.newsTitle.slice(0, 30)}
        subheader={post.added_at}
      />
      <Link href={`/postPage/${post.newsUrl}`}>
        <CardActionArea>
            { post.img ? <CardMedia 
                className="media"
                image={`${post.img}`}
                title="Paella dish"
            /> : ''}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.img ? post.newsContent.slice(0,50) : post.newsContent.slice(0,200)}...
                </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"   color={post.isLiked ? "primary" : "action"} onClick={()=>postsStore.togleLike(post)}>
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Hidden only={['sm','md', 'lg']}>
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
        </Hidden>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{post.newsContent}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default observer(NewsCard);