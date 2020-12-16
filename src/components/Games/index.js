import React from "react";
import { useHistory } from 'react-router-dom';

import Box from "@material-ui/core/Box";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
import Typography from "@material-ui/core/Typography";
import MemoryGame from "./Memory";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import useStyles from "./styles";

export default function Exercises() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Breadcrumbs separator="›">
          <Link color="inherit" href="/">
              Home
          </Link>
          <Link color="inherit" href="/page">
              Páginas
          </Link>
          <Link color="inherit" onClick={()=>{history.goBack()}}>
            Página
          </Link>
          <Link color="textPrimary" aria-current="page">
              Jogo
          </Link>
      </Breadcrumbs>
      <Box className={classes.root}>
        <Box className={classes.leftBox}>
          <div className={classes.trophyTitleHolder}>
            <EmojiEventsTwoToneIcon className={classes.trophyIcon} />
            <Typography className={classes.trophyText}>
              Ranking Parcial
            </Typography>
          </div>
        </Box>

        <Box className={classes.rightBox}>
          <div className={classes.exerciseContent}>
            <MemoryGame />
          </div>
        </Box>
      </Box>
    </>
  );
}
