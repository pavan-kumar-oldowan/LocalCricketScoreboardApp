import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTeamStore } from "../../store/useTeamStore";

export default function TeamNameScreen({ navigation }: any) {
  const { teams, setTeamName } = useTeamStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Setup</Text>

      {teams.map((team) => (
        <View key={team.id} style={styles.card}>
          <Text style={styles.label}>
            {team.id === "A" ? "Home Team" : "Away Team"}
          </Text>

          <TextInput
            style={styles.input}
            placeholder={`Enter ${team.name}`}
            value={team.name}
            onChangeText={(text) => setTeamName(team.id, text)}
          />
        </View>
      ))}

      <Button
        title="Next: Add Players"
        onPress={() => navigation.navigate("PlayerEntry")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
});
