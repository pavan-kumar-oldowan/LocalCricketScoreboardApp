import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../app/dashboard/DashboardScreen";
import GuestLoginScreen from "../app/onboarding/GuestLoginScreen";
import SplashScreen from "../app/onboarding/SplashScreen";

export type RootStackParamList = {
  Splash: undefined;
  GuestLogin: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GuestLogin" component={GuestLoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    
  );
}
