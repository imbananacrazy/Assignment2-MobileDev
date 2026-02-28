import HomeHeader from "@/components/home-header";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Story = {
  id: string;
  name: string;
  avatar: string;
  isLive?: boolean;
};

type Post = {
  id: string;
  user: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  time: string;
};

const STORIES: Story[] = [
  { id: "s1", name: "your_story", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: "s2", name: "mona.k", avatar: "https://i.pravatar.cc/150?img=22", isLive: true },
  { id: "s3", name: "chris_09", avatar: "https://i.pravatar.cc/150?img=33" },
  { id: "s4", name: "victor.etc", avatar: "https://i.pravatar.cc/150?img=45" },
  { id: "s5", name: "hana._x", avatar: "https://i.pravatar.cc/150?img=5" },
];

const POSTS: Post[] = [
  {
    id: "p1",
    user: "explore.daily",
    avatar: "https://i.pravatar.cc/150?img=18",
    image: "https://picsum.photos/id/1062/900/900",
    likes: 1106,
    caption: "A calm moment. Just vibes.",
    time: "2 hours ago",
  },
  {
    id: "p2",
    user: "city.frames",
    avatar: "https://i.pravatar.cc/150?img=28",
    image: "https://picsum.photos/id/1011/900/900",
    likes: 248,
    caption: "Weekend views.",
    time: "6 hours ago",
  },
];

function StoryItem({ item }: { item: Story }) {
  return (
    <View style={styles.storyItem}>
      <View style={styles.storyRing}>
        <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />
      </View>

      {item.id === "s1" && (
        <View style={styles.storyPlus}>
          <Ionicons name="add" size={14} color="#fff" />
        </View>
      )}

      {item.isLive && (
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>Live</Text>
        </View>
      )}

      <Text style={styles.storyName} numberOfLines={1}>
        {item.name}
      </Text>
    </View>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.postCard}>
      {/* Post header */}
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
          <Text style={styles.postUser}>{post.user}</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={18} color="#111" />
      </View>

      {/* Image */}
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.postActionsRow}>
        <View style={styles.postActionsLeft}>
          <Pressable style={styles.iconBtn}>
            <Ionicons name="heart-outline" size={24} color="#111" />
          </Pressable>
          <Pressable style={styles.iconBtn}>
            <Ionicons name="chatbubble-outline" size={22} color="#111" />
          </Pressable>
          <Pressable style={styles.iconBtn}>
            <Ionicons name="paper-plane-outline" size={22} color="#111" />
          </Pressable>
        </View>

        <Pressable style={styles.iconBtn}>
          <Ionicons name="bookmark-outline" size={22} color="#111" />
        </Pressable>
      </View>

      {/* Likes + caption */}
      <Text style={styles.likesText}>{post.likes.toLocaleString()} likes</Text>
      <Text style={styles.captionText}>
        <Text style={styles.captionUser}>{post.user}</Text> {post.caption}
      </Text>
      <Text style={styles.timeText}>{post.time}</Text>
    </View>
  );
}

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <HomeHeader />

          {/* Stories */}
          <View style={styles.storiesWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {STORIES.map((s) => (
                <StoryItem key={s.id} item={s} />
              ))}
            </ScrollView>
          </View>

          {/* Feed */}
          <FlatList
            data={POSTS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PostCard post={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.feedContent}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Stories
  storiesWrap: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  storyItem: {
    width: 78,
    alignItems: "center",
    marginHorizontal: 6,
  },
  storyRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#2FA7FF",
    alignItems: "center",
    justifyContent: "center",
  },
  storyAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ddd",
  },
  storyName: {
    marginTop: 6,
    fontSize: 12,
    color: "#111",
    maxWidth: 74,
    textAlign: "center",
  },
  storyPlus: {
    position: "absolute",
    right: 10,
    top: 42,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2FA7FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  liveBadge: {
    position: "absolute",
    top: 54,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: "#ff2d55",
  },
  liveText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },

  // Feed
  feedContent: {
    paddingBottom: 24,
  },

  // Post card
  postCard: {
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  postHeader: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  postAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#ddd",
  },
  postUser: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  postImage: {
    width: "100%",
    height: 360,
    backgroundColor: "#eee",
  },
  postActionsRow: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postActionsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBtn: {
    padding: 4,
  },
  likesText: {
    paddingHorizontal: 12,
    paddingTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
  },
  captionText: {
    paddingHorizontal: 12,
    paddingTop: 4,
    fontSize: 13,
    color: "#111",
  },
  captionUser: {
    fontWeight: "700",
  },
  timeText: {
    paddingHorizontal: 12,
    paddingTop: 6,
    fontSize: 11,
    color: "#777",
  },
});