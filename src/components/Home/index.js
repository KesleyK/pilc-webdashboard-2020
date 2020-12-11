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
      <Typography paragraph className={classes.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Lorem dolor sed viverra ipsum nunc aliquet. Nisi lacus sed viverra tellus in hac habitasse platea. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lectus sit amet est placerat in egestas erat imperdiet. Vel pretium lectus quam id leo in. Tortor at risus viverra adipiscing at in tellus integer. Est ultricies integer quis auctor. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Urna nec tincidunt praesent semper feugiat nibh. Fringilla est ullamcorper eget nulla facilisi. Pretium lectus quam id leo in vitae. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
      Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Magna eget est lorem ipsum. Iaculis nunc sed augue lacus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Duis at consectetur lorem donec massa sapien faucibus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Facilisi nullam vehicula ipsum a arcu cursus. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Arcu dictum varius duis at consectetur lorem donec massa sapien.      
      </Typography>
      <Typography paragraph className={classes.paragraph}>
      Sed nisi lacus sed viverra tellus. Sollicitudin ac orci phasellus egestas tellus. Accumsan in nisl nisi scelerisque eu ultrices vitae. Ultrices neque ornare aenean euismod elementum nisi. Odio ut sem nulla pharetra diam. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Scelerisque felis imperdiet proin fermentum. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. In eu mi bibendum neque egestas congue quisque. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Tristique risus nec feugiat in fermentum posuere.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
      A scelerisque purus semper eget duis at tellus at. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Auctor augue mauris augue neque gravida. Sed enim ut sem viverra aliquet. Sit amet purus gravida quis blandit turpis cursus. Sapien faucibus et molestie ac feugiat sed. At in tellus integer feugiat. Scelerisque eu ultrices vitae auctor eu augue ut. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pharetra et ultrices neque ornare aenean euismod elementum. At volutpat diam ut venenatis tellus.      
      </Typography>
      <Typography paragraph className={classes.paragraph}>
      Dignissim convallis aenean et tortor at risus viverra adipiscing at. Ut consequat semper viverra nam libero justo laoreet sit. Faucibus a pellentesque sit amet porttitor eget dolor. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vel quam elementum pulvinar etiam non quam. Molestie a iaculis at erat pellentesque adipiscing commodo. Praesent semper feugiat nibh sed. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dui nunc mattis enim ut. Praesent semper feugiat nibh sed pulvinar. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Diam sollicitudin tempor id eu nisl. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Sem integer vitae justo eget magna fermentum. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Massa vitae tortor condimentum lacinia quis vel eros.
      </Typography>
    </Box>
  );
}
