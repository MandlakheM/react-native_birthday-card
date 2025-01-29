import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const backgrounds = [
  {
    id: 1,
    uri: "https://i.pinimg.com/736x/6c/89/96/6c899636b23895faf9e01d7fe8c2ca79.jpg",
  },
  {
    id: 3,
    uri: "https://i.pinimg.com/736x/fc/5f/81/fc5f81ca2d15961babd79fca05416ebc.jpg",
  },
  {
    id: 4,
    uri: "https://i.pinimg.com/564x/29/ef/6b/29ef6bb07957686ff1bf2abaa12997de.jpg",
  },
  {
    id: 5,
    uri: "https://i.pinimg.com/736x/a6/32/5c/a6325c454f49467758e2dd36cd8aba30.jpg",
  },
  {
    id: 6,
    uri: "https://i.pinimg.com/736x/33/d8/78/33d878e61d8a2646e4a10674a8b8ad84.jpg",
  },
];

export default function BackgroundSelector({ setBackground }) {
  return (
    <View style={styles.container}>
      {backgrounds.map((bg) => (
        <TouchableOpacity
          key={bg.id}
          onPress={() => setBackground({ uri: bg.uri })}
        >
          <Image source={{ uri: bg.uri }} style={styles.thumbnail} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 10, overflowX: "scroll" },
  thumbnail: { width: 80, height: 80, marginRight: 10 },
});
