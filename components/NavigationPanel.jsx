import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import useNav from '../hooks/navigationLinks';
const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const NavigationPanel = ({}) => {
  const classes = useStyles();
  const { menu, user } = useStore();
  const nav = useNav(Boolean(user.userToken));
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={()=>menu.closePanel()}
      onKeyDown={()=>menu.closePanel()}
    >
      {nav}
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Drawer anchor={'left'} open={menu.show} onClose={()=>menu.closePanel()}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
export default observer(NavigationPanel);