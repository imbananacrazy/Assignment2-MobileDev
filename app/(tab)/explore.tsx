import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ExploreItem = {
  id: string;
  image: string;
  views: string;
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const GAP = 2;
const NUM_COLUMNS = 3;
const TILE_SIZE = (SCREEN_WIDTH - GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS;

// Random photos 
const EXPLORE_DATA: ExploreItem[] = [
  { id: "1", image: "https://picsum.photos/id/1011/600/600", views: "188K" },
  { id: "2", image: "https://picsum.photos/id/1015/600/600", views: "112K" },
  { id: "3", image: "https://picsum.photos/id/1020/600/600", views: "81K" },
  { id: "4", image: "https://picsum.photos/id/1027/600/600", views: "236K" },
  { id: "5", image: "https://picsum.photos/id/1035/600/600", views: "245K" },
  { id: "6", image: "https://picsum.photos/id/1043/600/600", views: "94.6K" },
  { id: "7", image: "https://picsum.photos/id/1050/600/600", views: "231K" },
  { id: "8", image: "https://picsum.photos/id/1062/600/600", views: "102K" },
  { id: "9", image: "https://picsum.photos/id/1069/600/600", views: "76K" },
  { id: "10", image: "https://picsum.photos/id/1074/600/600", views: "88K" },
  { id: "11", image: "https://picsum.photos/id/1084/600/600", views: "156K" },
  { id: "12", image: "https://picsum.photos/id/1080/600/600", views: "64K" },
  { id: "13", image: "https://picsum.photos/id/109/600/600", views: "51K" },
  { id: "14", image: "https://picsum.photos/id/110/600/600", views: "120K" },
  { id: "15", image: "https://picsum.photos/id/111/600/600", views: "99K" },
];

export default function ExploreScreen() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return EXPLORE_DATA;
    // simple fake filtering
    return EXPLORE_DATA.filter((_, idx) => idx % 2 === 0);
  }, [query]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Search bar */}
        <View style={styles.searchWrap}>
          <Ionicons name="search" size={18} color="#666" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* Grid */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          numColumns={NUM_COLUMNS}
          columnWrapperStyle={{ gap: GAP }}
          contentContainerStyle={{ gap: GAP, paddingBottom: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.85} style={styles.tile}>
              <Image source={{ uri: item.image }} style={styles.image} />

              {/* Views badge */}
              <View style={styles.viewsBadge}>
                <Ionicons name="eye-outline" size={12} color="#fff" />
                <Text style={styles.viewsText}>{item.views}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fff" },

  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
    gap: 8,
    marginHorizontal: 14,
    marginBottom: 10,
    marginTop: 6,
  },
  searchInput: { flex: 1, fontSize: 16, color: "#111" },

  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    backgroundColor: "#e6e6e6",
    position: "relative",
  },
  image: { width: "100%", height: "100%" },

  viewsBadge: {
    position: "absolute",
    left: 6,
    bottom: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
  },
  viewsText: { color: "#fff", fontSize: 11, fontWeight: "700" },
});