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

const useAudioPlayerStore = create<Store>((set, get) => ({
  selectedAudio: null,
  currentSongIndex: null,
  startPlaying: () =>
    set({ selectedAudio: MusicPlaylist[0], currentSongIndex: 0 }),
  playSelectedSong: (currentSongIdx) =>
    set({
      selectedAudio: MusicPlaylist[currentSongIdx],
      currentSongIndex: currentSongIdx,
    }),
  nextSong: () => {
    const currentSingIndex = get().currentSongIndex;
    const nextIdx = (currentSingIndex + 1) % MusicPlaylist.length;
    console.log("nextIdx ==>", nextIdx);
    set({ selectedAudio: MusicPlaylist[nextIdx], currentSongIndex: nextIdx });
  },
  previousSong: () => {
    const currentSingIndex = get().currentSongIndex;
    const prevIdx =
      currentSingIndex === 0 ? MusicPlaylist.length - 1 : currentSingIndex - 1;
    set({ selectedAudio: MusicPlaylist[prevIdx], currentSongIndex: prevIdx });
  },
}));

export default useAudioPlayerStore;
