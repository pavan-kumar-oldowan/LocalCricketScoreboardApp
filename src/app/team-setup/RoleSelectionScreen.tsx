import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTeamStore } from "../../store/useTeamStore";

export default function RoleSelectionScreen({ navigation }: any) {
  const { teams, assignCaptain, assignWicketKeeper } = useTeamStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assign Roles</Text>

      {teams.map((team) => (
        <View key={team.id} style={styles.teamBlock}>
          <Text style={styles.teamName}>{team.name}</Text>

          {team.players.map((player) => (
            <View key={player.id} style={styles.playerRow}>
              <Text style={styles.playerName}>{player.name}</Text>

              <TouchableOpacity
                style={[
                  styles.roleBtn,
                  player.isCaptain && styles.activeCaptain,
                ]}
                onPress={() => assignCaptain(team.id, player.id)}
              >
                <Text style={styles.roleText}>C</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.roleBtn,
                  player.isWicketKeeper && styles.activeWK,
                ]}
                onPress={() => assignWicketKeeper(team.id, player.id)}
              >
                <Text style={styles.roleText}>WK</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("SquadReview")}
      >
        <Text style={styles.nextText}>Review Squads</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  teamBlock: { marginBottom: 25 },
  teamName: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  playerName: { flex: 1, fontSize: 16 },
  roleBtn: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  roleText: { fontWeight: "bold" },
  activeCaptain: { backgroundColor: "#4CAF50" },
  activeWK: { backgroundColor: "#2196F3" },
  nextBtn: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  nextText: { color: "#fff", textAlign: "center", fontSize: 16 },
});
