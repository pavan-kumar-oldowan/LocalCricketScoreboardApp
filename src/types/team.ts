export interface Player {
  id: string;
  name: string;
  isCaptain: boolean;
  isWicketKeeper: boolean;
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
}
