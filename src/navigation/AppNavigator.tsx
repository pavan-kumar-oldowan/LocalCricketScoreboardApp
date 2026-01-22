import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../app/dashboard/DashboardScreen";
import MatchSummary from "../app/match-setup/MatchSummaryScreen";
import RulesConfig from "../app/match-setup/RulesConfigScreen";
import GuestLoginScreen from "../app/onboarding/GuestLoginScreen";
import SplashScreen from "../app/onboarding/SplashScreen";

export type RootStackParamList = {
  Splash: undefined;
  GuestLogin: undefined;
  Dashboard: undefined;
  RulesConfig: undefined;
  MatchSummary:undefined;
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
      </Stack.Navigator>
    
  );
}
