import { Button, Text, View } from "react-native";
import { useMatchConfigStore } from "../../store/useMatchConfigStore";

export default function OversConfigScreen({ navigation }: any) {
  const { rules, setRules } = useMatchConfigStore();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Match Configuration</Text>

      <Text>Overs: {rules.overs}</Text>
      <Button title="+" onPress={() => setRules({ overs: rules.overs + 1 })} />
      <Button title="-" onPress={() => setRules({ overs: rules.overs - 1 })} />

      <Text>Wickets: {rules.wickets}</Text>
      <Button title="+" onPress={() => setRules({ wickets: rules.wickets + 1 })} />
      <Button title="-" onPress={() => setRules({ wickets: rules.wickets - 1 })} />

      <Button
        title="Next"
        onPress={() => navigation.navigate("RulesConfig")}
      />
    </View>
  );
}
