import React, { useState } from "react";
import { Layout, Flex, Button } from "antd";
import { Box, Music } from "mdi-material-ui";
import { SunOutlined, MoonOutlined, MenuOutlined } from "@ant-design/icons";
import useThemeStore from "../../store/themeStore";

function HeaderContent({ handleDrawer }: any) {
  const { darkMode, enableDarkMode, enableLightMode } = useThemeStore();
  console.log("darkMode==>", darkMode);
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
        </div>
      </Flex>
    </Layout.Header>
  );
}

export default HeaderContent;
