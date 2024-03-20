import React, { useState } from "react";
import { Flex, Typography } from "antd";

function MusicItem({ musicInfo, handleSelectedSong }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => handleSelectedSong(musicInfo)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        gap: "10px",
        cursor: "pointer",
        padding: "10px",
        backgroundColor: isHovered ? "#dadada" : "transparent",
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
        <Typography.Title style={{ fontSize: "1rem", fontWeight: 700 }}>
          {musicInfo?.name}
        </Typography.Title>
        <Typography.Text style={{ fontSize: "1rem", fontWeight: 400 }}>
          {musicInfo?.artist}
        </Typography.Text>
      </div>
    </div>
  );
}

export default MusicItem;
