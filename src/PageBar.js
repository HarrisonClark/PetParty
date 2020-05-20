import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function PageBar() {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h2" style={{fontFamily: "Lucida Console" }}>PetFiesta</Typography>
                    <sup style={{fontSize: 15}}>©</sup>
                    <Button style={{marginLeft: "auto"}}>My Profile</Button>
                    <Button style={{marginLeft: "auto"}}>Home</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}