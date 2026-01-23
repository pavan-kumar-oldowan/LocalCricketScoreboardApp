import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMatchStore } from "../../store/useMatchStore";
import { useScoringStore } from "../../store/useScoringStore";
import { useTeamStore } from "../../store/useTeamStore";

export default function LiveScoringScreen() {
  const { score, addRun } = useScoringStore();
  const { teams } = useTeamStore();
  const { match } = useMatchStore();

  const battingTeam = teams.find(
    (t) => t.id === match.battingFirstTeamId
  );

  const striker = battingTeam?.players.find(
    (p) => p.id === match.strikerId
  );
  const nonStriker = battingTeam?.players.find(
    (p) => p.id === match.nonStrikerId
  );

  const overs = `${Math.floor(score.balls / 6)}.${score.balls % 6}`;

  return (
    <View style={styles.container}>
      {/* SCORE HEADER */}
      <View style={styles.header}>
        <Text style={styles.score}>
          {score.runs}/{score.wickets}
        </Text>
        <Text style={styles.over}>Over {overs}</Text>
      </View>

      {/* PLAYER CARDS */}
      <View style={styles.players}>
        <View style={styles.card}>
          <Text style={styles.label}>Striker</Text>
          <Text style={styles.player}>{striker?.name}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Non-Striker</Text>
          <Text style={styles.player}>{nonStriker?.name}</Text>
        </View>
      </View>

      {/* RUN BUTTONS */}
      <View style={styles.runsGrid}>
        {[0, 1, 2, 3, 4, 6].map((r) => (
          <TouchableOpacity
            key={r}
            style={styles.runBtn}
            onPress={() => addRun(r)}
          >
            <Text style={styles.runText}>{r}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0f172a" },
  header: { alignItems: "center", marginBottom: 20 },
  score: { fontSize: 36, color: "#fff", fontWeight: "bold" },
  over: { fontSize: 16, color: "#94a3b8" },

  players: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  card: {
    width: "48%",
    padding: 15,
    backgroundColor: "#020617",
    borderRadius: 10,
  },
  label: { color: "#94a3b8", marginBottom: 5 },
  player: { color: "#fff", fontSize: 18 },

  runsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  runBtn: {
    width: "30%",
    padding: 20,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  runText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});
