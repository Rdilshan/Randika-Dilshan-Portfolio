import { create } from 'zustand';

type ScrollStore = {
    scroll: number,
    setScroll: (newScroll: number) => void
};

export const useScrollStore = create<ScrollStore>((set) => ({
    scroll: 0,
    setScroll: (newScroll) => set({ scroll: newScroll }),
}));
