import React, { useState } from "react";
import { Typography } from "antd";
import useThemeStore from "../../store/themeStore";
import useAudioPlayerStore from "../../store/audioPlayerStore";

function MusicItem({ musicInfo, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useThemeStore();
  const { playSelectedSong } = useAudioPlayerStore();
  return (
    <div
      onClick={() => playSelectedSong(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        gap: "10px",
        cursor: "pointer",
        padding: "10px",
        backgroundColor:
          darkMode && isHovered
            ? "#1F262E"
            : !darkMode && isHovered
            ? "#dadada"
            : "transparent",
        borderRadius: "12px",
      }}>
      <img
        src={musicInfo?.cover}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <Typography.Title
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: darkMode ? "#aebacb" : "#303740",
          }}>
          {musicInfo?.name}
        </Typography.Title>
        <Typography.Text
          style={{
            fontSize: "1rem",
            fontWeight: 400,
            color: darkMode ? "#aebacb" : "#303740",
          }}>
          {musicInfo?.artist}
        </Typography.Text>
      </div>
    </div>
  );
}

export default MusicItem;
