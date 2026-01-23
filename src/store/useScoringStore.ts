import { create } from "zustand";
import { processBall } from "../engine/scoringEngine";
import { BallEvent, ScoreState } from "../types/scoring";
import { useMatchConfigStore } from "./useMatchConfigStore";

interface ScoringStore {
  score: ScoreState;
  addBall: (ball: BallEvent) => void;
}

export const useScoringStore = create<ScoringStore>((set) => ({
  score: {
    runs: 0,
    wickets: 0,
    balls: 0,
    currentOver: [],
  },

  addBall: (ball) =>
    set((state) => {
      const rules = useMatchConfigStore.getState().rules;
      const updated = processBall(state.score, ball, rules);
      return { score: updated };
    }),
}));
