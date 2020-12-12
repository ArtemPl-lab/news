import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox'
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useStore } from "mobx-store-provider";
import { observer } from 'mobx-react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      // '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      //   color: theme.palette.common.white,
      // },
    },
  },
}))(MenuItem);

export default observer(function MenuCard({ post }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { postsStore } = useStore();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pinPost = async () => {
    postsStore.togglePinned(post);
    fetch('/api/news/pin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          id: post._id
      })
    });
    setAnchorEl(null);
  }
  const deletePost = async () => {
    postsStore.deletePost(post);
    fetch('/api/news/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          id: post._id
      })
    });
    setAnchorEl(null);
  }
  const toggleVisible = async () => {
    postsStore.togglePinned(post);
    fetch('/api/news/pin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          id: post._id
      })
    });
    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={pinPost}>
        {!post.pinned ?
          <ListItemIcon>
            <AttachFileIcon fontSize="small" />
          </ListItemIcon>
          :
          <ListItemIcon>
            <HighlightOffIcon fontSize="small" />
          </ListItemIcon>
        }
          <ListItemText primary={post.pinned ? "Открепить": "Закрепить"} />
        </StyledMenuItem>
        <StyledMenuItem onClick={deletePost}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Удалить" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <VisibilityOffIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={post.visible ? "Скрыть" : "Показывать"} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
});
