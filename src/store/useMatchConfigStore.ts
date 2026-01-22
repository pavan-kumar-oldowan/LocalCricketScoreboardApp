import { create } from "zustand";
import { MatchRules } from "../types/match";

interface MatchConfigState {
  rules: MatchRules;
  setRules: (rules: Partial<MatchRules>) => void;
}

export const useMatchConfigStore = create<MatchConfigState>((set) => ({
  rules: {
    overs: 5,
    wickets: 5,
    wideRun: 1,
    noBallRun: 1,
    reballOnWide: true,
    reballOnNoBall: true,
  },
  setRules: (newRules) =>
    set((state) => ({
      rules: { ...state.rules, ...newRules },
    })),
}));
