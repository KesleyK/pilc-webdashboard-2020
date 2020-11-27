import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

import useStyles from "./styles";

const mediaJSON = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
];

export default function VideoCarousel() {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const renderedVideos = mediaJSON.map((video, i) => {
    return (
      <video
        height="200"
        style={{
          backgroundColor: "#eee",
          boxShadow: "rgba(0,0,0,.6) 0 2px 5px",
          borderRadius: 7,
        }}
        width="260"
        controls
      >
        <source src={video} type="video/mp4" />
      </video>
    );
  });

  return (
    <div className={classes.root} id="videosholder">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
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
