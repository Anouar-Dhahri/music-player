import { create } from "zustand";
import { MusicPlaylist } from "../constants";

interface MusicInterface {
  cover: string;
  name: string;
  artist: string;
  audio: string;
}

type Store = {
  selectedAudio: MusicInterface | null;
  currentSongIndex: number | null;
  startPlaying: () => void;
  playSelectedSong: (currentSongIdx: number) => void;
  nextSong: () => void;
  previousSong: () => void;
};

const useAudioPlayerStore = create<Store>((set) => ({
  selectedAudio: null,
  currentSongIndex: null,
  startPlaying: () =>
    set({ selectedAudio: MusicPlaylist[0], currentSongIndex: 0 }),
  playSelectedSong: (currentSongIdx) =>
    set({
      selectedAudio: MusicPlaylist[currentSongIdx],
      currentSongIndex: currentSongIdx,
    }),
  nextSong: () =>
    set((state) => {
      const nextIdx = (state.currentSongIndex + 1) % MusicPlaylist.length;
      console.log("nextIdx ==>", nextIdx);
      set({ selectedAudio: MusicPlaylist[nextIdx] });
    }),
  previousSong: () =>
    set((state) => {
      const prevIdx =
        state.currentSongIndex === 0
          ? MusicPlaylist.length - 1
          : state.currentSongIndex - 1;
      set({ selectedAudio: MusicPlaylist[prevIdx] });
    }),
}));

export default useAudioPlayerStore;
