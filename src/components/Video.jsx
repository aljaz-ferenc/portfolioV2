import React, { useEffect, useState } from "react";
import videoBg from "../assets/imagine.mp4";

export default function Video({muted, video}) {

  return (
      <div className="video">
      <video
        muted={muted}
        width="auto"
        height="auto"
        autoPlay
        loop
        controls
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
