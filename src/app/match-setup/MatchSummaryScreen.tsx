import { Button, Text, View } from "react-native";
import { useMatchConfigStore } from "../../store/useMatchConfigStore";

export default function MatchSummaryScreen({ navigation }: any) {
  const { rules } = useMatchConfigStore();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Match Summary</Text>

      <Text>Overs: {rules.overs}</Text>
      <Text>Wickets: {rules.wickets}</Text>
      <Text>Wide Run: {rules.wideRun}</Text>
      <Text>Re-ball on Wide: {rules.reballOnWide ? "Yes" : "No"}</Text>

      <Button
        title="Confirm & Continue"
        onPress={() => navigation.navigate("TeamSetup")}
      />
    </View>
  );
}
