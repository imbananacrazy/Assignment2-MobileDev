// Group profile screen layout inspired by Instagram-style UI
// Icons pulled from https://uxwing.com/ & https://www.flaticon.com/.
// We do not own any of the icons

import ProfileHeader from "@/components/profile-header";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Mock image data used to stimulate a post grid

const GRID_DATA = [
  { id: "1", uri: "https://picsum.photos/400/400?1" },
  { id: "2", uri: "https://picsum.photos/400/400?2" },
  { id: "3", uri: "https://picsum.photos/400/400?3" },
  { id: "4", uri: "https://picsum.photos/400/400?4" },
  { id: "5", uri: "https://picsum.photos/400/400?5" },
  { id: "6", uri: "https://picsum.photos/400/400?6" },
  { id: "7", uri: "https://picsum.photos/400/400?7" },
  { id: "8", uri: "https://picsum.photos/400/400?8" },
  { id: "9", uri: "https://picsum.photos/400/400?9" },
  { id: "10", uri: "https://picsum.photos/400/400?10" },
  { id: "11", uri: "https://picsum.photos/400/400?11" },
  { id: "12", uri: "https://picsum.photos/400/400?12" },
  { id: "13", uri: "https://picsum.photos/400/400?13" },
  { id: "14", uri: "https://picsum.photos/400/400?14" },
  { id: "15", uri: "https://picsum.photos/400/400?15" },
];

// Main group profile screen combining header, profile info, post grid, and footer

export default function Profile() {
  return (
    <SafeAreaProvider>
      {/* Safe area handling for notches UI */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          {/* HEADER (teammate) */}
          <ProfileHeader />

          <View style={styles.content}>
            {/* Profile row */}
            <View style={styles.profileRow}>
              {/* Group avatar with outer ring and inner initials */}
              <View style={styles.avatarOuter}>
                <View style={styles.avatarInner}>
                  <Text style={styles.avatarText}>OO{"\n"}TD</Text>
                </View>
              </View>
              {/* Stats and full name */}
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  marginLeft: 25,
                  gap: 10,
                }}>
                <Text style={{ fontSize: 14 }}>Out of the Dust</Text>
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>53</Text>
                    <Text style={styles.statLabel}>posts</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>137</Text>
                    <Text style={styles.statLabel}>followers</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>983</Text>
                    <Text style={styles.statLabel}>following</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Bio */}
            <Text style={styles.bioLine}>Bio and description for user</Text>

            {/* Member status button (dropdown functionality to be added) */}
            <View style={styles.profileManagementRow}>
              <View style={styles.profileManagementBtn}>
                <Text style={styles.profileManagementText}>Edit Profile</Text>
              </View>
              <View style={styles.profileManagementBtn}>
                <Text style={styles.profileManagementText}>Share Profile</Text>
              </View>
            </View>

            {/* Posts grid  rendered using FlatList for performance*/}
            <FlatList
              data={GRID_DATA}
              keyExtractor={(item) => item.id}
              numColumns={3}
              renderItem={({ item }) => (
                <Image source={{ uri: item.uri }} style={styles.gridImage} />
              )}
              columnWrapperStyle={styles.gridRow}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
// Styles for group profile screen layout and UI elements
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flex: 1,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatarOuter: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 3,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarInner: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#2f80ed",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 16,
  },

  statsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 40,
  },

  statItem: {
    alignItems: "flex-start",
  },

  statNumber: {
    fontSize: 14,
  },

  statLabel: {
    fontSize: 14,
    marginTop: 2,
  },

  groupName: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },

  bioLine: {
    fontSize: 12,
    marginBottom: 2,
  },

  profileManagementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  profileManagementBtn: {
    marginTop: 10,
    marginBottom: 12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
    width: "50%",
  },

  profileManagementText: {
    fontWeight: "400",
    marginRight: 8,
  },

  gridRow: {
    justifyContent: "space-between",
    marginBottom: 3,
  },

  gridImage: {
    width: "33%",
    height: 165,
    aspectRatio: 1,
  },
});
