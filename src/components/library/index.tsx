import { Drawer, Flex, Typography, Divider, Tooltip, Button } from "antd";
import { MusicPlaylist } from "../../constants";
import MusicItem from "./musicItem";
import useThemeStore from "../../store/themeStore";

import { CloseOutlined } from "@ant-design/icons";

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: darkMode ? "#aebacb" : "#303740",
          }}>
          PlayList
        </Typography.Title>
        <Tooltip title={"Hide Playlist"}>
          <Button
            shape="circle"
            size="large"
            icon={<CloseOutlined />}
            style={{
              backgroundColor: "transparent",
              color: "#66b2ff",
              borderColor: darkMode ? "#1F262E" : "#C5D0E0",
            }}
            onClick={handleDrawer}
          />
        </Tooltip>
      </div>
      <Divider />
      <Flex vertical={true} gap={10}>
        {MusicPlaylist?.map((data: any, index: any) => (
          <MusicItem key={index} musicInfo={data} index={index} />
        ))}
      </Flex>
    </Drawer>
  );
}

export default Library;
