import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMatchStore } from "../../store/useMatchStore";
import { useScoringStore } from "../../store/useScoringStore";
import { useTeamStore } from "../../store/useTeamStore";

export default function LiveScoringScreen() {
  const { score, addBall } = useScoringStore();
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
        <Text style={styles.scoreText}>
          {score.runs}/{score.wickets}
        </Text>
        <Text style={styles.overText}>Overs {overs}</Text>
      </View>

      {/* PLAYER CARDS */}
      <View style={styles.playersRow}>
        <View style={styles.playerCard}>
          <Text style={styles.label}>Striker</Text>
          <Text style={styles.playerName}>{striker?.name}</Text>
        </View>

        <View style={styles.playerCard}>
          <Text style={styles.label}>Non-Striker</Text>
          <Text style={styles.playerName}>{nonStriker?.name}</Text>
        </View>
      </View>

      {/* RUN BUTTONS */}
      <View style={styles.runGrid}>
        {[0, 1, 2, 3, 4, 6].map((run) => (
          <TouchableOpacity
            key={run}
            style={styles.runBtn}
            onPress={() => addBall({ runs: run })}
          >
            <Text style={styles.runText}>{run}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* EXTRA ACTIONS */}
      <View style={styles.extrasRow}>
        <TouchableOpacity
          style={styles.extraBtn}
          onPress={() => addBall({ runs: 0, isWide: true })}
        >
          <Text style={styles.extraText}>WD</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.extraBtn}
          onPress={() => addBall({ runs: 0, isNoBall: true })}
        >
          <Text style={styles.extraText}>NB</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.extraBtn, styles.wicketBtn]}
          onPress={() => addBall({ runs: 0, isWicket: true })}
        >
          <Text style={styles.extraText}>W</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 25,
  },
  scoreText: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
  },
  overText: {
    fontSize: 16,
    color: "#94a3b8",
  },

  playersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  playerCard: {
    width: "48%",
    backgroundColor: "#020617",
    padding: 15,
    borderRadius: 12,
  },
  label: {
    color: "#94a3b8",
    marginBottom: 6,
  },
  playerName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  runGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  runBtn: {
    width: "30%",
    backgroundColor: "#1e293b",
    paddingVertical: 22,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 15,
  },
  runText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  extrasRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  extraBtn: {
    width: "30%",
    backgroundColor: "#334155",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
  },
  wicketBtn: {
    backgroundColor: "#dc2626",
  },
  extraText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
