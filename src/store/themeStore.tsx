import { create } from "zustand";

type Store = {
  darkMode: boolean;
  enableDarkMode: () => void;
  enableLightMode: () => void;
};

const useThemeStore = create<Store>((set) => ({
  darkMode: false,
  enableDarkMode: () => set({ darkMode: true }),
  enableLightMode: () => set({ darkMode: false }),
}));

export default useThemeStore;
