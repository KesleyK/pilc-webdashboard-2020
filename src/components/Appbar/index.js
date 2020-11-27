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
              <a href="#conteudo" className={classes.link}>
                Conteúdo
              </a>
              <a href="#exercicios" className={classes.link}>
                Exercícios
              </a>
              <a href="#ranking" className={classes.link}>
                Ranking
              </a>
              <UserLabel/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
