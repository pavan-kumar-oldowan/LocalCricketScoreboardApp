export interface MatchRules {
  overs: number;
  wickets: number;
  wideRun: number;      // 0 or 1
  noBallRun: number;   // usually 1
  reballOnWide: boolean;
  reballOnNoBall: boolean;
}
