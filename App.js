import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Foods from "./screens/Foods";
import Food from "./screens/Food";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Foods" component={Foods} />
        <Stack.Screen name="Food" component={Food} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
