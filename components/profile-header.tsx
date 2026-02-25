import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileHeader() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/(tab)/profile/create-post")}>
        <Image
          style={styles.pressable}
          source={require("@/assets/images/Instagram/plus.png")}
        />
      </Pressable>
      <View style={styles.titles}>
        <Text style={styles.title}>john.doe</Text>
      </View>
      <Pressable>
        <Image
          style={styles.pressable}
          source={require("@/assets/images/Instagram/hamburger.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  titles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pressable: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 15,
  },
});
