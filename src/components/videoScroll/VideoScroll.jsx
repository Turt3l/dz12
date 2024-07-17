"use client";

import React, { useEffect, useRef, useState } from "react";

export default function VideoScroll() {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const playbackConst = 1000; // Adjust the constant as needed
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function updateVideo(scrollPos) {
      if (videoRef.current && scrollSectionRef.current) {
        const rect = scrollSectionRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const sectionTop = rect.top + scrollTop;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
          const frameNumber = (scrollPos - sectionTop) / playbackConst;
          if (videoRef.current.currentTime !== frameNumber) {
            videoRef.current.currentTime = frameNumber;
          }
        }
      }
    }

    function handleScroll() {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateVideo(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      const { duration } = video;
      const playbackConst = 1600;
      const scrollSection = scrollSectionRef.current;
      if (videoRef?.current) {
        scrollSection.style.height =
          Math.floor(duration) * playbackConst + "px";
      }
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  return (
    <div
      ref={scrollSectionRef}
      id="scrollSection"
      style={{ position: "relative" }}
    >
      <video
        ref={videoRef}
        id="v0"
        preload="auto"
        style={{ position: "fixed", top: 0, width: "100vw", zIndex: -1 }}
      >
        <source
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          src="https://cdn.discordapp.com/attachments/1024035073948930159/1262749235112181860/0001-0060.mp4?ex=6697ba5e&is=669668de&hm=29cb3b9cb826fe8b64fb276d7207a7ce152135630e71ee0663d2f85a8e5517eb&"
        ></source>
      </video>
    </div>
  );
}
