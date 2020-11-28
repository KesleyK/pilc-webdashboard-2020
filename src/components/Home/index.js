import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        Home
      </Typography>
    </Box>
  );
}
