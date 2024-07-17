"use client";

import React, { useEffect, useRef, useState } from "react";

let frequencyArray = [];
let analyser;
let audio;
let context;
let source;

const Visualizer = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(drawCanvas);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    if (canvasRef.current) {
      drawCanvas(); // Draw the canvas once when the component mounts
    }
  }, []);

  const initAudio = () => {
    if (!audio) {
      audio = new Audio();
      audio.src =
        "https://cdn.freesound.org/previews/745/745703_11861866-lq.mp3";
      audio.crossOrigin = "anonymous";
      audio.load();

      context = new (window.AudioContext || window.webkitAudioContext)();
      analyser = context.createAnalyser();
      source = context.createMediaElementSource(audio);

      source.connect(analyser);
      analyser.connect(context.destination);

      frequencyArray = new Uint8Array(analyser.frequencyBinCount);
    }

    audio.play();
  };

  const togglePlay = () => {
    if (!isPlaying) {
      initAudio();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const drawCircle = (canvas, ctx, radius) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  };

  const drawCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const radius = 250;
      const bars = 200;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCircle(canvas, ctx, radius / 2);

      if (isPlaying) {
        analyser.getByteFrequencyData(frequencyArray);

        for (let i = 0; i < bars; i++) {
          const height = frequencyArray[i] * 0.2;

          drawLine({ i, bars, height, radius }, canvas, ctx);
        }
      }

      requestRef.current = requestAnimationFrame(drawCanvas);
    }
  };

  const drawLine = (opts, canvas, ctx) => {
    const { i, radius, bars, height } = opts;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const lineWidth = 2;
    const rads = (Math.PI * 2) / bars;

    const x = centerX + Math.cos(rads * i) * (radius / 2 + lineWidth);
    const y = centerY + Math.sin(rads * i) * (radius / 2 + lineWidth);
    const endX = centerX + Math.cos(rads * i) * (radius / 2 + height);
    const endY = centerY + Math.sin(rads * i) * (radius / 2 + height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <canvas
        ref={canvasRef}
        style={{ background: "#FFFFFF" }}
        width={window.innerWidth / 2.5}
        height={window.innerHeight / 2.5}
      />
      <button
        onClick={togglePlay}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60px",
          height: "60px",
          background: "none",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="60" height="60">
            <rect x="6" y="4" width="4" height="16" fill="black" />
            <rect x="14" y="4" width="4" height="16" fill="black" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="60" height="60">
            <polygon points="5,3 19,12 5,21" fill="black" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Visualizer;
