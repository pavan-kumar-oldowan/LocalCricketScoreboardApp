import { Button, StyleSheet, Text, View } from "react-native";
import { useSessionStore } from "../../store/useSessionStore";

export default function DashboardScreen() {
  const guestId = useSessionStore((state) => state.guestId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Scorer</Text>
      <Text>Guest ID: {guestId?.slice(0, 8)}</Text>

      <View style={{ marginTop: 30 }}>
        <Button title="Create New Match" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});
