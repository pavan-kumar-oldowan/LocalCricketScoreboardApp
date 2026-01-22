import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { useSessionStore } from "../../store/useSessionStore";

type Props = NativeStackScreenProps<RootStackParamList, "GuestLogin">;

export default function GuestLoginScreen({ navigation }: Props) {
  const setGuestId = useSessionStore((state) => state.setGuestId);

  const handleGuestLogin = () => {
    const id = uuidv4();
    setGuestId(id);
    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instant Match Scoring</Text>
      <Button title="Continue as Guest" onPress={handleGuestLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
});
