import React from "react";
import Box from "@material-ui/core/Box";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MemoryGame from "./Memory";

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
          <MemoryGame />
        </div>
      </Box>
    </Box>
  );
}
