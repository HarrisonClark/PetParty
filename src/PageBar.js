import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function PageBar() {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h2" style={{fontFamily: "Lucida Console" }}>PetFiesta</Typography>
                    <sup style={{fontSize: 15}}>©</sup>
                    <div style={{marginLeft: "auto"}}>My Profile</div>
                    <div style={{marginLeft: "auto"}}>Home</div>
                </Toolbar>
            </AppBar>
        </>
    )
}