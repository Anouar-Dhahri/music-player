import React, { useState, useEffect } from "react";
import { Layout, Button, Typography, Tooltip } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import WavesurferPlayer from "@wavesurfer/react";
import coverImages from "../../assets";
import useSkinStore from "../../store/skinStore";
import useAudioPlayerStore from "../../store/audioPlayerStore";

function AudioPlayer() {
  const { selectedAudio, startPlaying, nextSong, previousSong } =
    useAudioPlayerStore();
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { skin } = useSkinStore();
  const [songDuration, setSongDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("windowWidth==>", windowWidth);
  useEffect(() => {
    if (selectedAudio) {
      setIsPlaying(true);
    }
  }, [selectedAudio]);

  const formatDuration = (durationInSeconds: number) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const onReady = (ws: any) => {
    console.log("ws==>", ws);
    const durationInSeconds = ws.getDuration();
    setSongDuration(formatDuration(durationInSeconds));
    setWavesurfer(ws);
  };

  const onAudioprocess = (ws: any) => {
    if (ws) {
      const currentTimeInSeconds = ws.getCurrentTime();
      setCurrentTime(formatDuration(currentTimeInSeconds));
    }
  };

  const onPlayPause = () => {
    setIsPlaying(false);
    console.log("wavesurfer", wavesurfer);
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <Layout.Content
      style={{
        backgroundColor: "#FFF",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        ...(windowWidth <= 600 && {
          width: "90%",
        }),
        ...(windowWidth > 600 &&
          windowWidth <= 1200 && {
            // Add specific styles for medium screens if needed
            width: "70%",
          }),
        ...(windowWidth > 1200 && {
          // Add specific styles for large screens and above if needed
          width: "50%",
        }),
      }}>
      <img
        src={selectedAudio ? selectedAudio?.cover : coverImages.mainCover}
        style={{
          width:
            windowWidth > 1200
              ? "250px"
              : windowWidth > 600 && windowWidth <= 1200
              ? "200px"
              : "150px",
          height:
            windowWidth > 1200
              ? "250px"
              : windowWidth > 600 && windowWidth <= 1200
              ? "200px"
              : "150px",
          borderRadius: "50%",
          border: "2px solid #1F262E",
          transform: isPlaying ? "rotate(360deg)" : "none",
          animation: isPlaying ? "rotate 2s linear infinite" : "none",
        }}
      />

      <div style={{ width: "100%", textAlign: "center" }}>
        <Typography.Text style={{ fontWeight: 700, fontSize: "2rem" }}>
          {" "}
          {currentTime} | {songDuration}
        </Typography.Text>
      </div>
      <div
        style={{
          width: "100%",
        }}>
        <div
          id="waveSurferContainer"
          style={{
            width: "95%",
            maxWidth: "95%", // Limit the maximum width if needed
          }}>
          <WavesurferPlayer
            // key={waveSurferWidth}
            // width={waveSurferWidth}
            height={100}
            waveColor={skin.waveColor}
            progressColor={skin.progressColor}
            url={selectedAudio?.audio}
            onReady={onReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            autoplay={true}
            onAudioprocess={onAudioprocess}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <Tooltip title="Previous Song">
          <Button
            icon={<LeftOutlined />}
            size="large"
            style={{ width: "50px", height: "50px", borderRadius: "10px" }}
            onClick={previousSong}
            disabled={!selectedAudio ? true : false}
          />
        </Tooltip>
        <Tooltip title="Play / Pause">
          <Button
            icon={isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}
            size="large"
            onClick={!selectedAudio ? startPlaying : onPlayPause}
            style={{ width: "50px", height: "50px", borderRadius: "10px" }}
          />
        </Tooltip>
        <Tooltip title="Next Song">
          <Button
            icon={<RightOutlined />}
            size="large"
            style={{ width: "50px", height: "50px", borderRadius: "10px" }}
            disabled={!selectedAudio ? true : false}
            onClick={nextSong}
          />
        </Tooltip>
      </div>
    </Layout.Content>
  );
}

export default AudioPlayer;
