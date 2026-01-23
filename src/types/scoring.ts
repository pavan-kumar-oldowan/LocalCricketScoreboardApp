
export interface BallEvent {
  runs: number;
  isWide?: boolean;
  isNoBall?: boolean;
  isWicket?: boolean;
}

export interface ScoreState {
  runs: number;
  wickets: number;
  balls: number; // legal balls only
  currentOver: number[];
}
