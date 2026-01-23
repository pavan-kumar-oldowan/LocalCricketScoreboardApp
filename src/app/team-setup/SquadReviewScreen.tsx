import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTeamStore } from "../../store/useTeamStore";

export default function SquadReviewScreen({ navigation }: any) {
  const { teams } = useTeamStore();

  const validateTeams = () => {
    for (const team of teams) {
      const captain = team.players.find((p) => p.isCaptain);
      const wk = team.players.find((p) => p.isWicketKeeper);

      if (!captain || !wk) {
        Alert.alert(
          "Incomplete Team",
          `${team.name} must have a Captain and Wicketkeeper`
        );
        return false;
      }

      if (team.players.length < 2) {
        Alert.alert(
          "Not Enough Players",
          `${team.name} must have at least 2 players`
        );
        return false;
      }
    }
    return true;
  };

  const handleLockSquads = () => {
    if (!validateTeams()) return;
    navigation.navigate("Toss"); // DAY 5
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Squad Review</Text>

      <View style={styles.teamsRow}>
        {teams.map((team) => (
          <View key={team.id} style={styles.teamCard}>
            <Text style={styles.teamName}>{team.name}</Text>

            {team.players.map((player) => (
              <Text key={player.id} style={styles.player}>
                {player.name}
                {player.isCaptain && " (C)"}
                {player.isWicketKeeper && " (WK)"}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.lockBtn} onPress={handleLockSquads}>
        <Text style={styles.lockText}>Lock Squads & Proceed to Toss</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  player: {
    fontSize: 15,
    marginBottom: 6,
  },
  lockBtn: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
  },
  lockText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
