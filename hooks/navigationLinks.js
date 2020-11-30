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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useCookie from 'react-use-cookie';
import { useStore } from 'mobx-store-provider';
import HelpIcon from '@material-ui/icons/Help';
import ContactsIcon from '@material-ui/icons/Contacts';
const useNav = isAdmin => {
    const [userToken, setUserToken] = useCookie('token');
    const { user } = useStore();
    const logout = () => {
        user.setToken('');
        setUserToken('');
    }
    
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
                    <Link href="/resourses/add">
                        <ListItem button>
                            <ListItemIcon><PlaylistAddIcon /></ListItemIcon>
                            <ListItemText primary="Добавить источник" />
                        </ListItem>
                    </Link>
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
                <Divider />
                <List>
                    <ListItem button onClick={logout}>
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary="Выйти" />
                    </ListItem>
                </List>
            </React.Fragment>
        );  
    }
    return(
        <React.Fragment>
        <List>
            <Link href="/">
                <ListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Главная" />
                </ListItem>
            </Link>
            <ListItem button>
                <ListItemIcon><FavoriteIcon /></ListItemIcon>
                <ListItemText primary="Понравившееся" />
            </ListItem>
            <Link href="/questions">
                <ListItem button>
                    <ListItemIcon><HelpIcon /></ListItemIcon>
                    <ListItemText primary="Частые вопросы" />
                </ListItem>
            </Link>
            <ListItem button>
                <ListItemIcon><ContactsIcon /></ListItemIcon>
                <ListItemText primary="Контакты" />
            </ListItem>
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

export default useNav;