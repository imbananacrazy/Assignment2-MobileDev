import { Stack } from "expo-router";

export default function CreatePostLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="share-profile" options={{ headerShown: false }} />
      <Stack.Screen name="create-post" options={{ headerShown: false }} />
    </Stack>
  );
}
