import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const ShareProfile = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close-outline" size={40} color="black" />
      </Pressable>
      <View style={styles.qrCode}></View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

export default ShareProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    gap: 10,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  qrCode: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    width: 300,
    height: 75,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
  close: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontSize: 20,
    color: "white",
  },
});
