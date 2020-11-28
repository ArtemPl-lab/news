import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
const useNav = isAdmin => {
    if(isAdmin){
        return(
            <React.Fragment>
                <List>
                    <Link href="/">
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Главная" />
                        </ListItem>
                    </Link>
                    <Link href="/post/add">
                        <ListItem button>
                            <ListItemIcon><AddBoxIcon /></ListItemIcon>
                            <ListItemText primary="Добавить новость" />
                        </ListItem>
                    </Link>
                    <Link href="/anchored">
                        <ListItem button>
                            <ListItemIcon><AttachFileIcon /></ListItemIcon>
                            <ListItemText primary="Закреплённые" />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon><VisibilityOffIcon /></ListItemIcon>
                        <ListItemText primary="Скрытые" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><FavoriteIcon /></ListItemIcon>
                        <ListItemText primary="Понравившееся" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><SystemUpdateAltIcon /></ListItemIcon>
                        <ListItemText primary="Источники" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><PlaylistAddIcon /></ListItemIcon>
                        <ListItemText primary="Добавить источник" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AlarmAddIcon /></ListItemIcon>
                        <ListItemText primary="История парсинга" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <Link href="/politice">
                        <ListItem button>
                            <ListItemIcon><DescriptionIcon /></ListItemIcon>
                            <ListItemText primary="Политика конф." />
                        </ListItem>
                    </Link>
                </List>
            </React.Fragment>
        );  
    }
    return(
        <React.Fragment>
            <List>
                <ListItem button>
                <ListItemIcon><FavoriteIcon /></ListItemIcon>
                <ListItemText primary="Понравившееся" />
                </ListItem>
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
}

export default useNav;