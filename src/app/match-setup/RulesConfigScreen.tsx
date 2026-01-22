import { Button, Switch, Text, View } from "react-native";
import { useMatchConfigStore } from "../../store/useMatchConfigStore";

export default function RulesConfigScreen({ navigation }: any) {
  const { rules, setRules } = useMatchConfigStore();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Extra Runs Rules</Text>

      <Text>Wide gives 1 run</Text>
      <Switch
        value={rules.wideRun === 1}
        onValueChange={(v) => setRules({ wideRun: v ? 1 : 0 })}
      />

      <Text>Re-ball on Wide</Text>
      <Switch
        value={rules.reballOnWide}
        onValueChange={(v) => setRules({ reballOnWide: v })}
      />

      <Text>Re-ball on No Ball</Text>
      <Switch
        value={rules.reballOnNoBall}
        onValueChange={(v) => setRules({ reballOnNoBall: v })}
      />

      <Button
        title="Review Match"
        onPress={() => navigation.navigate("MatchSummary")}
      />
    </View>
  );
}
