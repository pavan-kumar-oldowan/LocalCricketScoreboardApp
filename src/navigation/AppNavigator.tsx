import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../app/dashboard/DashboardScreen";
import MatchSummary from "../app/match-setup/MatchSummaryScreen";
import RulesConfig from "../app/match-setup/RulesConfigScreen";
import GuestLoginScreen from "../app/onboarding/GuestLoginScreen";
import SplashScreen from "../app/onboarding/SplashScreen";
import LiveScoring from "../app/scoring/LiveScoringScreen";
import PlayerEntry from "../app/team-setup/PlayerEntryScreen";
import RoleSelection from "../app/team-setup/RoleSelectionScreen";
import SquadReview from "../app/team-setup/SquadReviewScreen";
import TeamSetup from "../app/team-setup/TeamNameScreen";
import MatchStart from "../app/toss/MatchStartScreen";
import OpeningPlayers from "../app/toss/OpeningPlayersScreen";
import TossDecision from "../app/toss/TossDecisionScreen";
import Toss from "../app/toss/TossScreen";
export type RootStackParamList = {
  Splash: undefined;
  GuestLogin: undefined;
  Dashboard: undefined;
  RulesConfig: undefined;
  MatchSummary:undefined;
  TeamSetup:undefined;
  PlayerEntry:undefined;
  SquadReview:undefined;
  RoleSelection:undefined;
  TossDecision:undefined;
  Toss:undefined;
  OpeningPlayers:undefined;
  MatchStart:undefined;
  LiveScoring:undefined;


};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GuestLogin" component={GuestLoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name ="RulesConfig" component={RulesConfig} />
        <Stack.Screen name="MatchSummary" component={MatchSummary} />
        <Stack.Screen name="TeamSetup" component={TeamSetup}/>
        <Stack.Screen name="PlayerEntry" component={PlayerEntry}/>
        <Stack.Screen name="SquadReview" component={SquadReview}/>
        <Stack.Screen name="RoleSelection" component={RoleSelection}/>
        <Stack.Screen name="Toss" component={Toss}/>
        <Stack.Screen name="TossDecision" component={TossDecision}/>
        <Stack.Screen name="OpeningPlayers" component={OpeningPlayers}/>
        <Stack.Screen name="MatchStart" component={MatchStart}/>
        <Stack.Screen name="LiveScoring" component={LiveScoring}/>
      </Stack.Navigator>
    
  );
}
