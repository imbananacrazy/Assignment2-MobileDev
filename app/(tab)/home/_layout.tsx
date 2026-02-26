import { Stack } from "expo-router";

export default function CreatePostLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="demo-reel-page" options={{ headerShown: false }} />
    </Stack>
  );
}
