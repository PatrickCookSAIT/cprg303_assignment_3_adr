import { Stack } from "expo-router";
import { Text } from "react-native";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/*Redirect landing page to tabs*/}
      <Stack.Screen name="index" />
      <Text>test</Text>
    </Stack>
  );
}
