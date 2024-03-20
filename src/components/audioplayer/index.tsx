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

function AudioPlayer({ selectedAudio }: any) {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (selectedAudio) {
      setIsPlaying(true);
    }
  }, [selectedAudio]);

  const onReady = (ws: any) => {
    setWavesurfer(ws);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <Layout.Content
      style={{
        backgroundColor: "#FFF",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <img
        src={selectedAudio ? selectedAudio?.cover : coverImages.mainCover}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}>
        <Typography.Text></Typography.Text>
        <WavesurferPlayer
          width={700}
          height={100}
          waveColor="violet"
          url={selectedAudio?.audio}
          onReady={onReady}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoplay={true}
        />
        <Typography.Text></Typography.Text>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <Button icon={<LeftOutlined />} size="large" />
        <Button
          icon={isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}
          size="large"
          onClick={onPlayPause}
        />
        <Button icon={<RightOutlined />} size="large" />
      </div>
    </Layout.Content>
  );
}

export default AudioPlayer;
