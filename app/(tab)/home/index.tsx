import HomeHeader from "@/components/home-header";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "@/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme";
 
export default function Home() {
  const router = useRouter();

  const { theme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[ styles.safeArea ,{backgroundColor: colors.background } ]}>
        <View style={{ flex: 1 }}>
          <HomeHeader />
          <View style={styles.storiesRow}>
            {[1, 2, 3, 4].map((item) => (
              <View
                key={item}
                style={[
                  styles.storyItem,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.accent,
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  storiesRow: {
    flexDirection: "row",
    paddingTop: 15,
  },
  storyItem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 8,
    borderWidth: 2,
  },
});
