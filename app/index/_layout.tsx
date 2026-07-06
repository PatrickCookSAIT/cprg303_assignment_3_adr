import { Stack } from "expo-router";
import React from "react";
const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ADD8E6",
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};
