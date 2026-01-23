import { Button, Text, View } from "react-native";
import { useMatchStore } from "../../store/useMatchStore";
import { useTeamStore } from "../../store/useTeamStore";

export default function TossDecisionScreen({ navigation }: any) {
  const { teams } = useTeamStore();
  const { match, setMatch } = useMatchStore();

  const winner = teams.find((t) => t.id === match.tossWinnerTeamId);

  const chooseBat = () => {
    setMatch({ battingFirstTeamId: winner?.id });
    navigation.navigate("OpeningPlayers");
  };

  const chooseBowl = () => {
    const other = teams.find((t) => t.id !== winner?.id);
    setMatch({ battingFirstTeamId: other?.id });
    navigation.navigate("OpeningPlayers");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>
        {winner?.name} won the toss
      </Text>

      <Button title="Bat First" onPress={chooseBat} />
      <Button title="Bowl First" onPress={chooseBowl} />
    </View>
  );
}
