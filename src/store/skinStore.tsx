import { create } from "zustand";

interface skinInterface {
  waveColor: string;
  progressColor: string;
}
type Store = {
  skin: skinInterface;
  changeSkin: () => void;
};

const useSkinStore = create<Store>((set) => ({
  skin: { waveColor: "#1F262E", progressColor: "#66b2ff" },
  changeSkin: (selectedSkin: skinInterface) => set({ skin: selectedSkin }),
}));

export default useSkinStore;
