import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      {/* Header container with left action, centered titles, and right action */}
      {/* Action icons wrapped in Pressable for future navigation or actions */}
      {/* Group name and username displayed in the center */}
      <Pressable>
        <Image
          style={styles.pressable}
          source={require("@/assets/images/Instagram/plus.png")}
        />
      </Pressable>
      <View style={styles.titles}>
        <Text style={styles.title}>Username</Text>
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
// Styles for header layout typography, and icons
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
