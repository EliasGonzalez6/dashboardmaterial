import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import logo from '../assets/img/logo.jpg';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
    }));

function Navbar() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>        
                    <IconButton color="inherit">
                        <img src={logo} width="40px" height="40px" className={classes.imagen}/>
                    </IconButton>            
                    <Typography variant="h6" className={classes.title}>
                       Perfect Phone
                    </Typography>                    
                </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default Navbar;