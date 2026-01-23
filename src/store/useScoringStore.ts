import { create } from "zustand";
import { ScoreState } from "../types/scoring";

interface ScoringStore {
  score: ScoreState;
  addRun: (runs: number) => void;
}

export const useScoringStore = create<ScoringStore>((set) => ({
  score: {
    runs: 0,
    wickets: 0,
    balls: 0,
  },

  addRun: (runs) =>
    set((state) => ({
      score: {
        ...state.score,
        runs: state.score.runs + runs,
        balls: state.score.balls + 1,
      },
    })),
}));
