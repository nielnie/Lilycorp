import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from './logo.PNG';

import useStyles from './styles';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase-config';
import {signOut} from "firebase/auth";
import { getCardUtilityClass } from '@mui/material';



const Topbar = ({isAuth, setIsAuth, numberOfItems}) => {
    const classes = useStyles();
    const logout = async () => {
    
        await signOut(auth);
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
        
        
      }
    
  return (
    <div>
        <div style={{height: "5px", backgroundColor: '#fff7ec'}}></div>
        <AppBar position='static' className={classes.appBar} >
            <Toolbar >
                
                <img src={logo} alt="lilycorp" height="90px" />
                <div style= {{ flexGrow:'0.47'}}></div>
               

                
                {/* <img src={home} height="20px" /> */}
                <Typography variant="h6" >
                    <Link to = "/home" className={classes.links} >Home</Link>
                </Typography>
                <div style= {{ flexGrow:'0.3'}}></div>
                <Typography variant="h6" >
                    {!isAuth ? <Link to = "/login" className={classes.links}>Login</Link> : <button onClick={logout}>Log Out</button>}
                </Typography>
                    
                <div/>
                <div style= {{ flexGrow:'0.5'}}></div>
                <div >
                    <IconButton component={Link} to ='/cart'>
                        <Badge  badgeContent={numberOfItems} color="secondary"  >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>

        </AppBar>
        <div style={{height: "5px"}}>
            </div>        
        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

    </div>
  )
}

export default Topbar