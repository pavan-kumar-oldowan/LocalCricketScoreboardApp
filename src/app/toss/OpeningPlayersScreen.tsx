import { Text, TouchableOpacity, View } from "react-native";
import { useMatchStore } from "../../store/useMatchStore";
import { useTeamStore } from "../../store/useTeamStore";

export default function OpeningPlayersScreen({ navigation }: any) {
  const { teams } = useTeamStore();
  const { match, setMatch } = useMatchStore();

  const battingTeam = teams.find(
    (t) => t.id === match.battingFirstTeamId
  );
  const bowlingTeam = teams.find(
    (t) => t.id !== match.battingFirstTeamId
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Select Striker</Text>
      {battingTeam?.players.map((p) => (
        <TouchableOpacity
          key={p.id}
          onPress={() => setMatch({ strikerId: p.id })}
        >
          <Text>{p.name}</Text>
        </TouchableOpacity>
      ))}

      <Text>Select Non-Striker</Text>
      {battingTeam?.players
        .filter((p) => p.id !== match.strikerId)
        .map((p) => (
          <TouchableOpacity
            key={p.id}
            onPress={() => setMatch({ nonStrikerId: p.id })}
          >
            <Text>{p.name}</Text>
          </TouchableOpacity>
        ))}

      <Text>Select Bowler</Text>
      {bowlingTeam?.players.map((p) => (
        <TouchableOpacity
          key={p.id}
          onPress={() => setMatch({ bowlerId: p.id })}
        >
          <Text>{p.name}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        onPress={() => navigation.navigate("MatchStart")}
      >
        <Text style={{ marginTop: 20 }}>Start Match</Text>
      </TouchableOpacity>
    </View>
  );
}
