import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const ShareProfile = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close-outline" size={40} color="black" />
      </Pressable>
      <View style={styles.qrCode}>
        <Image
          source={require("@/assets/images/Instagram/qrcode.png")}
          style={styles.qrImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Ionicons name="share-outline" size={25} color="black" />
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="copy-outline" size={25} color="black" />
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="download-outline" size={25} color="black" />
        </Pressable>
      </View>
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
    gap: 50,
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
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "lightgray",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
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
  qrImage: {
    width: "100%",
    height: "100%",
  },
});
