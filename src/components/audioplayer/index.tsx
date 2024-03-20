import React, { useState, useEffect } from "react";
import { Layout, Button, Typography } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import WavesurferPlayer from "@wavesurfer/react";
import coverImages from "../../assets";
import useSkinStore from "../../store/skinStore";

function AudioPlayer({ selectedAudio }: any) {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { skin } = useSkinStore();

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

  const onReady = (ws: any) => {
    console.log("ws==>", ws);
    setWavesurfer(ws);
  };

  const onPlayPause = () => {
    setIsPlaying(false);
    console.log("wavesurfer", wavesurfer)
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          width: "100%",
        }}>
        <Typography.Text></Typography.Text>
        <div
        id="waveSurferContainer"
        style={{
          width: "100%",
          maxWidth: "90%", // Limit the maximum width if needed
        }}
      >
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
        />
        </div>
        <Typography.Text></Typography.Text>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <Button
          icon={<LeftOutlined />}
          size="large"
          style={{ width: "50px", height: "50px", borderRadius: "10px" }}
        />
        <Button
          icon={isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}
          size="large"
          onClick={onPlayPause}
          style={{ width: "50px", height: "50px", borderRadius: "10px" }}
        />
        <Button
          icon={<RightOutlined />}
          size="large"
          style={{ width: "50px", height: "50px", borderRadius: "10px" }}
        />
      </div>
    </Layout.Content>
  );
}

export default AudioPlayer;
