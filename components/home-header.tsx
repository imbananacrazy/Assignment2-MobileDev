//Instagram logo retrieved from https://commons.wikimedia.org/wiki/File:Instagram_logo.svg

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function HomeHeader() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/(tab)/home/create-post")}>
        <Image
          style={styles.pressable}
          source={require("@/assets/images/Instagram/plus.png")}
        />
      </Pressable>
      <View style={styles.titles}>
        <Image
          style={styles.instagramLogo}
          source={require("@/assets/images/Instagram/instagram-logo.png")}
        />
      </View>
      <Pressable>
        <Ionicons
          name="heart-outline"
          size={30}
          color="black"
          style={styles.heartIcon}
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
  pressable: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  heartIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  instagramLogo: {
    width: 100,
    height: 30,
  },
});
