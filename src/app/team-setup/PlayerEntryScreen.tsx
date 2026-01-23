import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useTeamStore } from "../../store/useTeamStore";

export default function PlayerEntryScreen({ navigation }: any) {
  const { teams, addPlayer } = useTeamStore();
  const [name, setName] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Add Players</Text>

      {teams.map((team) => (
        <View key={team.id}>
          <Text>{team.name}</Text>
          <TextInput
            placeholder="Player name"
            value={name}
            onChangeText={setName}
          />
          <Button
            title="Add Player"
            onPress={() => {
              addPlayer(team.id, name);
              setName("");
            }}
          />
        </View>
      ))}

      <Button
        title="Assign Roles"
        onPress={() => navigation.navigate("RoleSelection")}
      />
    </View>
  );
}
