import React, { useState } from "react";
import { Layout } from "antd";
import { Header, Library, AudioPlayer } from "../components";

function MainLayout() {
  const [open, setOpen] = useState(false);

  const [audio, setAudio] = useState(null);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleSelectedSong = (audio: any) => {
    console.log("audio ==>", audio);
    setAudio(audio);
  };

  return (
    <Layout style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <Header handleDrawer={handleDrawer} />
      <Library
        open={open}
        handleDrawer={handleDrawer}
        handleSelectedSong={handleSelectedSong}
      />
      <AudioPlayer selectedAudio={audio} />
    </Layout>
  );
}

export default MainLayout;
