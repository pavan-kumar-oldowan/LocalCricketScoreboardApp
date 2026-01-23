import { Button, Text, View } from "react-native";

export default function MatchStartScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Ready to Play 🏏</Text>
      <Button
        title="Start Scoring"
        onPress={() => navigation.navigate("LiveScoring")}
      />
    </View>
  );
}
