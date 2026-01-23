import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMatchStore } from "../../store/useMatchStore";
import { useTeamStore } from "../../store/useTeamStore";

export default function TossScreen({ navigation }: any) {
  const { teams } = useTeamStore();
  const { setMatch } = useMatchStore();

  const handleToss = () => {
    const winner = teams[Math.floor(Math.random() * teams.length)];
    setMatch({ tossWinnerTeamId: winner.id });
    navigation.navigate("TossDecision");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toss Time 🪙</Text>

      <TouchableOpacity style={styles.coin} onPress={handleToss}>
        <Text style={styles.coinText}>FLIP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 40 },
  coin: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
  },
  coinText: { fontSize: 20, fontWeight: "bold" },
});
