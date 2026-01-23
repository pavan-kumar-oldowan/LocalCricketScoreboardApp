import { MatchRules } from "../types/match";
import { BallEvent, ScoreState } from "../types/scoring";

export function processBall(
  state: ScoreState,
  ball: BallEvent,
  rules: MatchRules
): ScoreState {
  let runs = state.runs;
  let balls = state.balls;
  let wickets = state.wickets;

  // Runs
  runs += ball.runs;

  // Extras
  if (ball.isWide) runs += rules.wideRun;
  if (ball.isNoBall) runs += rules.noBallRun;

  // Legal ball?
  const legal =
    (!ball.isWide || !rules.reballOnWide) &&
    (!ball.isNoBall || !rules.reballOnNoBall);

  if (legal) {
    balls += 1;
    state.currentOver.push(ball.runs);
  }

  // Wicket
  if (ball.isWicket) wickets += 1;

  // Over completion
  if (balls % 6 === 0) {
    state.currentOver = [];
  }

  return { ...state, runs, balls, wickets };
}
