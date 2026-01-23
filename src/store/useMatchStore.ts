import { create } from "zustand";
import { MatchState } from "../types/matchState";

interface MatchStore {
  match: MatchState;
  setMatch: (data: Partial<MatchState>) => void;
}

export const useMatchStore = create<MatchStore>((set) => ({
  match: {},
  setMatch: (data) =>
    set((state) => ({
      match: { ...state.match, ...data },
    })),
}));
