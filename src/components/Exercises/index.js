import React from "react";
import Box from "@material-ui/core/Box";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

export default function Exercises() {
  const classes = useStyles();

  return (
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
          <p>
            1 - O avanço da genética não possui nenhuma relação com a criação de
            alimentos transgênicos?
          </p>
        </div>
        <div className={classes.buttonsHolder}>
          <Button variant="contained" className={classes.orangeButton}>
            Não sei
          </Button>
          <Button variant="contained" className={classes.redButton}>
            Falso
          </Button>
          <Button variant="contained" className={classes.greenButton}>
            Verdadeiro
          </Button>
        </div>
      </Box>
    </Box>
  );
}
