import React from "react";
import { Drawer, Flex } from "antd";
import { MusicPlaylist } from "../../constants";
import MusicItem from "./musicItem";

function Library({ open, handleDrawer, handleSelectedSong }: any) {
  return (
    <Drawer
      title="Library"
      placement="left"
      closable={false}
      onClose={handleDrawer}
      open={open}
      key="left">
      <Flex vertical={true} gap={10}>
        {MusicPlaylist?.map((data: any, index: any) => (
          <MusicItem
            key={index}
            musicInfo={data}
            handleSelectedSong={handleSelectedSong}
          />
        ))}
      </Flex>
    </Drawer>
  );
}

export default Library;
