import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserLabel from "../UserLabel";

import useStyles from "./styles";

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.textLogo}>Portal Genética</Typography>
          <Box className={classes.rightContent}>
            <Box className={classes.linksHolder}>
              <UserLabel/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
