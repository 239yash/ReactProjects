import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkerBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationNoneIcon}/>
            <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkerBorderIcon}/>
            <SidebarOption text="Lists" Icon={ListAltIcon}/>
            <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>

            <Button className="sidebar__tweet" variant="outlined">Tweet</Button>
        </div>
        
    );
}

export default Sidebar;
