import { MatchRules } from "../types/match";

export function calculateBall({
  runs,
  isWide,
  isNoBall,
  rules,
}: {
  runs: number;
  isWide: boolean;
  isNoBall: boolean;
  rules: MatchRules;
}) {
  let totalRuns = runs;
  let countBall = true;

  if (isWide) {
    totalRuns += rules.wideRun;
    countBall = !rules.reballOnWide;
  }

  if (isNoBall) {
    totalRuns += rules.noBallRun;
    countBall = !rules.reballOnNoBall;
  }

  return {
    totalRuns,
    countBall,
  };
}
