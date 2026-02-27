import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ChatItem = {
  id: string;
  name: string;
  preview: string;
  time: string;
  avatar: string;
};

type NoteItem = {
  id: string;
  label: string;
  note: string;
  avatar: string;
};

const NOTES: NoteItem[] = [
  {
    id: "n1",
    label: "Your note",
    note: "Share a thought...",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    id: "n2",
    label: "Avery",
    note: "Gym later?",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: "n3",
    label: "Noah",
    note: "Deadline today",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: "n4",
    label: "Mina",
    note: "Coffee run",
    avatar: "https://i.pravatar.cc/150?img=34",
  },
  {
    id: "n5",
    label: "Zara",
    note: "On my way",
    avatar: "https://i.pravatar.cc/150?img=35",
  },
];

const CHATS: ChatItem[] = [
  {
    id: "1",
    name: "Avery Chen",
    preview: "Sent a photo · 2h",
    time: "2h",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: "2",
    name: "Noah Patel",
    preview: "Reacted 😂 to your message · 5h",
    time: "5h",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
  {
    id: "3",
    name: "Mina Rahman",
    preview: "Typing… · 8h",
    time: "8h",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    id: "4",
    name: "Jordan Park",
    preview: "Seen yesterday",
    time: "1d",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    id: "5",
    name: "Sofia Martinez",
    preview: "Shared a reel · 2d",
    time: "2d",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "6",
    name: "Omar Hassan",
    preview: "Liked a message · 3d",
    time: "3d",
    avatar: "https://i.pravatar.cc/150?img=26",
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerLeft} activeOpacity={0.7}>
            <Text style={styles.username}>john.doe</Text>
            <Ionicons name="chevron-down" size={18} color="#111" />
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <Feather name="edit" size={22} color="#111" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <Ionicons name="search" size={18} color="#666" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* Notes row */}
        <View style={styles.notesRow}>
          <FlatList
            data={NOTES}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 12 }}
            renderItem={({ item }) => (
              <View style={styles.noteCard}>
                <View style={styles.noteAvatarWrap}>
                  <View style={styles.noteBubble}>
                    <Text style={styles.noteBubbleText} numberOfLines={1}>
                      {item.note}
                    </Text>
                  </View>
                  <Image source={{ uri: item.avatar }} style={styles.noteAvatar} />
                </View>

                <Text style={styles.noteName} numberOfLines={1}>
                  {item.label}
                </Text>

                {item.id === "n1" ? (
                  <Text style={styles.noteSub} numberOfLines={1}>
                    📍 Location off
                  </Text>
                ) : (
                  <Text style={styles.noteSub} numberOfLines={1}>
                    {item.note}
                  </Text>
                )}
              </View>
            )}
          />
        </View>

        {/* Messages header row */}
        <View style={styles.messagesHeader}>
          <Text style={styles.messagesTitle}>Messages</Text>
          <Text style={styles.requests}>Requests</Text>
        </View>

        {/* Chat list */}
        <FlatList
          data={CHATS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 18 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.chatRow} activeOpacity={0.75}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />

              <View style={styles.chatMid}>
                <Text style={styles.chatName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.chatPreview} numberOfLines={1}>
                  {item.preview}
                </Text>
              </View>

              <View style={styles.chatRight}>
                <Text style={styles.chatTime}>{item.time}</Text>
                <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.7}>
                  <Ionicons name="camera-outline" size={22} color="#111" />
                </TouchableOpacity>
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
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 14 },

  header: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 6 },
  username: { fontSize: 22, fontWeight: "800", color: "#111" },
  headerRight: { flexDirection: "row", alignItems: "center" },
  iconBtn: { padding: 8 },

  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
    gap: 8,
    marginBottom: 10,
  },
  searchInput: { flex: 1, fontSize: 16, color: "#111" },

  notesRow: { paddingVertical: 6, marginBottom: 8 },
  noteCard: { width: 92, marginRight: 12 },

  noteAvatarWrap: { alignItems: "center", justifyContent: "center" },
  noteAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#ddd",
  },
  noteBubble: {
    position: "absolute",
    top: -6,
    zIndex: 2,
    backgroundColor: "#ededed",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    maxWidth: 90,
  },
  noteBubbleText: { fontSize: 11, color: "#333" },

  noteName: { marginTop: 8, fontSize: 13, color: "#111" },
  noteSub: { marginTop: 2, fontSize: 11, color: "#777" },

  messagesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  messagesTitle: { fontSize: 18, fontWeight: "800", color: "#111" },
  requests: { fontSize: 15, fontWeight: "700", color: "#111" },

  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: "#ddd" },
  chatMid: { flex: 1, marginLeft: 12 },
  chatName: { fontSize: 16, fontWeight: "700", color: "#111" },
  chatPreview: { fontSize: 13, color: "#666", marginTop: 3 },

  chatRight: { alignItems: "flex-end", gap: 6 },
  chatTime: { fontSize: 12, color: "#888" },
  cameraBtn: { padding: 4 },
});