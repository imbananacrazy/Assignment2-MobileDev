import HomeHeader from "@/components/home-header";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <HomeHeader />
          <View style={styles.container}>
            <View style={styles.storiesRow}>
              <View style={styles.storyItem}>
                <View />
              </View>
              <View style={styles.storyItem}>
                <View />
              </View>
              <View style={styles.storyItem}>
                <View />
              </View>
              <View style={styles.storyItem}>
                <View />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  storiesRow: {
    flexDirection: "row",
    marginBottom: "auto",
    marginRight: "auto",
    paddingTop: 5,
  },
  storyItem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "lightblue",
    marginHorizontal: 5,
  },
});
