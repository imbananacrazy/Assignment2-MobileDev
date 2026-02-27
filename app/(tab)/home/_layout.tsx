import { Stack } from "expo-router";
import {ThemeProvider} from "@/ThemeContext";

export default function CreatePostLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="demo-reel-page" options={{ headerShown: false }} />
    </Stack>
  );
}
