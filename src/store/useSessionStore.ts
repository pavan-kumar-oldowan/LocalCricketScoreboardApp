import { create } from "zustand";

interface SessionState {
  guestId: string | null;
  setGuestId: (id: string) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  guestId: null,
  setGuestId: (id) => set({ guestId: id }),
}));
