import { useState, useEffect } from "react";
import {
  Layout,
  Flex,
  Button,
  Tooltip,
  Modal,
  Divider,
  Typography,
} from "antd";
import { Box, Music } from "mdi-material-ui";
import {
  SunOutlined,
  MoonOutlined,
  MenuOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import useThemeStore from "../../store/themeStore";
import useSkinStore from "../../store/skinStore";
import { skinsList } from "../../constants";

function HeaderContent({ handleDrawer }: any) {
  const { darkMode, enableDarkMode, enableLightMode } = useThemeStore();
  const { changeSkin } = useSkinStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout.Header
      style={{
        backgroundColor: !darkMode ? "#FFF" : "#101519",
        height: "70px",
      }}>
      <Flex justify="space-between">
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "11px",
          }}>
          <Music
            style={{ fontSize: "3rem", color: !darkMode ? "#101519" : "#FFF" }}
          />
          <Box
            style={{ fontSize: "3rem", color: !darkMode ? "#101519" : "#FFF" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "11px",
          }}>
          {windowWidth <= 600 ? (
            <Tooltip title="Show Playlist">
              <Button
                shape="circle"
                size="large"
                icon={<MenuOutlined />}
                style={{
                  backgroundColor: "transparent",
                  color: "#66b2ff",
                  borderColor: darkMode ? "#1F262E" : "#C5D0E0",
                }}
                onClick={handleDrawer}></Button>
            </Tooltip>
          ) : (
            <Tooltip title="Show Playlist">
              <Button
                size="large"
                icon={<MenuOutlined />}
                style={{
                  fontWeight: 500,
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                  color: "#66b2ff",
                  borderColor: darkMode ? "#1F262E" : "#C5D0E0",
                  borderRadius: "12px",
                }}
                onClick={handleDrawer}>
                Library
              </Button>
            </Tooltip>
          )}

          <Tooltip
            title={!darkMode ? "Turn off the light" : "Turn on the light"}>
            <Button
              shape="circle"
              size="large"
              icon={!darkMode ? <MoonOutlined /> : <SunOutlined />}
              style={{
                backgroundColor: "transparent",
                color: "#66b2ff",
                borderColor: darkMode ? "#1F262E" : "#C5D0E0",
              }}
              onClick={() => (darkMode ? enableLightMode() : enableDarkMode())}
            />
          </Tooltip>
          <Tooltip title="Change Progress Bar Skin">
            <Button
              shape="circle"
              size="large"
              icon={<ExperimentOutlined />}
              style={{
                backgroundColor: "transparent",
                color: "#66b2ff",
                borderColor: darkMode ? "#1F262E" : "#C5D0E0",
              }}
              onClick={showModal}
            />
          </Tooltip>
        </div>
      </Flex>
      <Modal
        open={isModalOpen}
        closable={false}
        onOk={closeModal}
        onCancel={closeModal}>
        <Typography.Title
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#303740",
          }}>
          Skins
        </Typography.Title>
        <Divider />
        <div
          style={{
            display: "grid",

            ...(windowWidth <= 600 && {
              gridTemplateColumns: "repeat(2,1fr)",
            }),
            ...(windowWidth > 600 &&
              windowWidth <= 1200 && {
                // Add specific styles for medium screens if needed
                gridTemplateColumns: "repeat(3,1fr)",
              }),
            ...(windowWidth > 1200 && {
              // Add specific styles for large screens and above if needed
              gridTemplateColumns: "repeat(4,1fr)",
            }),
            gap: "1rem",
          }}>
          {skinsList?.map((skin: any, index: number) => (
            <div
              style={{
                display: "inline-block",
                overflow: "hidden",
                position: "relative",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => changeSkin(skin)}>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  float: "left",
                  backgroundColor: skin.waveColor,
                }}></div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  float: "left",
                  backgroundColor: skin.progressColor,
                }}></div>
            </div>
          ))}
        </div>
      </Modal>
    </Layout.Header>
  );
}

export default HeaderContent;
