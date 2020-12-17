import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ReactPlayer from "react-player";

import useStyles from "./styles";

const mediaJSON = [
  "https://www.youtube.com/watch?v=W4kiJ3V2Z04",
  "https://www.youtube.com/watch?v=shJYZDzf4bg&t=101s",
  "https://www.youtube.com/watch?v=UBfInkTvqt8",
  "https://www.youtube.com/watch?v=b0cZLgTA7hs",
  "https://www.youtube.com/watch?v=blEUTcx16N8",
  "https://www.youtube.com/watch?v=8g571hUvgeo",
];

export default function VideoCarousel() {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const renderedVideos = mediaJSON.map((video, i) => {
    return (
      <ReactPlayer
        style={{
          backgroundColor: "#eee",
          boxShadow: "rgba(0,0,0,.6) 0 2px 5px",
          borderRadius: 7,
          margin: "20px 5px",
          height: "100%",
        }}
        height="220px"
        width="100%"
        url={video}
      />
    );
  });

  return (
    <div className={classes.root} id="videosholder">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={10}
        leftChevron={<button className={classes.button}>{"<"}</button>}
        rightChevron={<button className={classes.button}>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {renderedVideos}
      </ItemsCarousel>
    </div>
  );
}
