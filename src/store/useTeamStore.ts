import { create } from "zustand";
import { Team } from "../types/team";

interface TeamState {
  teams: Team[];
  setTeamName: (teamId: string, name: string) => void;
  addPlayer: (teamId: string, playerName: string) => void;
  assignCaptain: (teamId: string, playerId: string) => void;
  assignWicketKeeper: (teamId: string, playerId: string) => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  teams: [
    { id: "A", name: "Team A", players: [] },
    { id: "B", name: "Team B", players: [] },
  ],

  setTeamName: (teamId, name) =>
    set((state) => ({
      teams: state.teams.map((t) =>
        t.id === teamId ? { ...t, name } : t
      ),
    })),

  addPlayer: (teamId, name) =>
    set((state) => ({
      teams: state.teams.map((t) =>
        t.id === teamId
          ? {
              ...t,
              players: [
                ...t.players,
                {
                  id: Date.now().toString(),
                  name,
                  isCaptain: false,
                  isWicketKeeper: false,
                },
              ],
            }
          : t
      ),
    })),

  assignCaptain: (teamId, playerId) =>
    set((state) => ({
      teams: state.teams.map((t) =>
        t.id === teamId
          ? {
              ...t,
              players: t.players.map((p) => ({
                ...p,
                isCaptain: p.id === playerId,
              })),
            }
          : t
      ),
    })),

  assignWicketKeeper: (teamId, playerId) =>
    set((state) => ({
      teams: state.teams.map((t) =>
        t.id === teamId
          ? {
              ...t,
              players: t.players.map((p) => ({
                ...p,
                isWicketKeeper: p.id === playerId,
              })),
            }
          : t
      ),
    })),
}));
