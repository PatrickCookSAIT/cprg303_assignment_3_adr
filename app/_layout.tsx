import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ADD8E6" },
        headerTintColor: "#333333",
        headerTitleStyle: {
          fontWeight: "800",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleContainerStyle: {
          paddingTop: 40,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Welcome to ADR Co." }} />
    </Stack>
  );
}
