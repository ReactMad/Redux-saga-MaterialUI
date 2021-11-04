import React, { useState } from 'react';
import { createStyles, Icon, makeStyles } from '@material-ui/core';
import { GitHub, Facebook} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import navMenus from '../../../config/navbar.config';

const useStyles = makeStyles(theme => createStyles({
    root: {
    },

    headerMobile: {
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#17181B',
        padding: '1rem',
        color: 'white',
        '& a': {
            textTransform: 'uppercase'
        },
        '& span': {
            position: 'absolute',
            top: '50%',
            right: 0,
            paddingLeft: '0.3rem',
            borderLeft: '1px solid #333333',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer'
        }
    },

    headerMain: {
        position: 'fixed',
        zIndex: 2,
        top: 0,
        left: 0,
        height: '100vh',
        backgroundColor: '#17181B',
        borderRight: '1px solid #202226',
        overflowX: 'hidden',
        overflow: 'auto',
        transition: 'left 0.4s ease-in-out',
        "& .avatar": {
            minHeight: '11rem',
            minWidth: '12rem',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(assets/img/profile-img.jpg)',
            position: 'relative',
            "& h2": {
                textTransform: 'uppercase',
                width: '100%',
                padding: '0.4rem',
                backgroundColor: 'rgba(0, 150, 250, 0.7)',
                color: 'white',
                textAlign: 'center',
                position: 'absolute',
                bottom: 0,
                fontSize: '1.3rem',
                fontWeight: 'bold'
            }
        },
        "& .nav-menus": {
            "& ul": {
                color: '#777',
                "& li": {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    borderBottom: '1px solid #333333',
                    "& a": {
                        padding: "0 0 0 0.4rem"                        
                    },
                    "&:hover": {
                        color: 'white'
                    }
                }
            }
        }
    },
    menuHide: {
        transition: 'left 0.4s ease-in-out',
        left: '-100%'
    },
    headerBottom: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        padding: '1rem',
        color: '#777',
        "& ul": {
            "& li": {
                margin: "0 1rem",
                "&:hover": {
                    color: 'white'
                }
            }
        }
    }
}));

const Header = () => {
    const classes = useStyles();

    const [hidden, setHidden] = useState(false);

    return (
        <header className={classes.root}>
            <div className={classnames(classes.headerMobile, "text-center p-4 md:hidden")}>
                <Link to="/">
                    Jason Emilis de Jesus
                </Link>
                <Icon onClick={() => setHidden(!hidden)}>menu</Icon>
            </div>
            <div className={classnames(classes.headerMain, hidden ? classes.menuHide : null, "md:left-0")}>
                <div className="avatar">
                    <h2>Jason Emilis</h2>
                </div>
                <nav className="nav-menus">
                    <ul>
                       {
                           navMenus.map(_menu => (
                               <li key={_menu.url}>
                                   <Icon>
                                       {_menu.icon}
                                   </Icon>
                                   <Link to={_menu.url}>
                                       {_menu.title}
                                   </Link>
                               </li>
                           ))
                       } 
                    </ul>
                </nav>
                <div className={classnames(classes.headerBottom)}>
                    <div className="text-center py-4">
                        Anywhere we meet!
                    </div>
                    <ul className="flex items-center justify-center">
                        <li>
                            <GitHub />
                        </li>
                        <li>
                            <Facebook />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )    
}

export default Header;
