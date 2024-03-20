import React, { useState } from "react";
import { Layout, Flex, Button } from "antd";
import { Box, Music } from "mdi-material-ui";
import { SunOutlined, MoonOutlined, MenuOutlined } from "@ant-design/icons";

function HeaderContent({ handleDrawer }: any) {
  return (
    <Layout.Header style={{ backgroundColor: "#FFF", height: "70px" }}>
      <Flex justify="space-between">
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "11px",
          }}>
          <Music style={{ fontSize: "3rem", color: "#000" }} />
          <Box style={{ fontSize: "3rem", color: "#000" }} />
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
            style={{ fontWeight: 500, textTransform: "uppercase" }}
            onClick={handleDrawer}>
            Library
          </Button>
          <Button
            shape="circle"
            size="large"
            icon={<SunOutlined /> ? <MoonOutlined /> : <SunOutlined />}
          />
        </div>
      </Flex>
    </Layout.Header>
  );
}

export default HeaderContent;
