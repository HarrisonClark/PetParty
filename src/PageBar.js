import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

export default function PageBar() {
  let history = useHistory();

  function pushProfile() {
    history.push("/profile");
  }

  function pushHome() {
    history.push("/");
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Grid container direction="row" style={{ padding: "1em" }}>
            <Grid item>
              <Typography variant="h2" style={{ fontFamily: "Lucida Console" }}>
                PetFiesta
              </Typography>
            </Grid>
            <Grid item>
              <sup style={{ fontSize: 15 }}>©</sup>
            </Grid>
            <Grid item style={{ marginLeft: "55em", paddingTop: "1.2em" }}>
              <Button onClick={pushProfile} size="large">
                Profile
              </Button>
            </Grid>
            <Grid item style={{ marginLeft: "auto", paddingTop: "1.2em" }}>
              <Button onClick={pushHome} size="large">
                Home
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
