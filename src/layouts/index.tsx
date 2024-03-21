import { useState } from "react";
import { Layout } from "antd";
import { Header, Library, AudioPlayer } from "../components";
import useThemeStore from "../store/themeStore";

function MainLayout() {
  const [open, setOpen] = useState(false);

  const { darkMode } = useThemeStore();

  const handleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <Layout
      style={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: darkMode ? "#1F262E" : "transparent",
      }}>
      <Header handleDrawer={handleDrawer} />
      <Library
        open={open}
        handleDrawer={handleDrawer}
      />
      <AudioPlayer />
    </Layout>
  );
}

export default MainLayout;
