import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CreatePost = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close-outline" size={40} color="black" />
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Reel</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Edit</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Post</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Story</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Highlight</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Live</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New AI</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Ad</Text>
      </Pressable>
      <View style={styles.break}></View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>New Fundraiser</Text>
      </Pressable>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 10,
  },
  break: {
    width: "85%",
    height: 1,
    backgroundColor: "lightgray",
    alignSelf: "center",
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
});
