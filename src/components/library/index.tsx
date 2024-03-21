import React from "react";
import { Drawer, Flex, Typography, Divider } from "antd";
import { MusicPlaylist } from "../../constants";
import MusicItem from "./musicItem";
import useThemeStore from "../../store/themeStore";

function Library({ open, handleDrawer }: any) {
  const { darkMode } = useThemeStore();
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={handleDrawer}
      open={open}
      key="left"
      style={{ backgroundColor: !darkMode ? "#FFF" : "#101519" }}>
      <Typography.Title
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: darkMode ? "#aebacb" : "#303740",
        }}>
        PlayList
      </Typography.Title>
      <Divider />
      <Flex vertical={true} gap={10}>
        {MusicPlaylist?.map((data: any, index: any) => (
          <MusicItem
            key={index}
            musicInfo={data}
            index={index}
          />
        ))}
      </Flex>
    </Drawer>
  );
}

export default Library;
