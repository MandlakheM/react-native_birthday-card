import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const decorations = [
  { id: 1, uri: 'https://i.pinimg.com/564x/96/9b/24/969b247117239fb8f901decf8ee2285b.jpg' },
  { id: 2, uri: 'https://i.pinimg.com/564x/29/ef/6b/29ef6bb07957686ff1bf2abaa12997de.jpg' },
];

export default function DecorationPicker({ decorationsList, setDecorationsList }) {
  const addDecoration = (decoration) => {
    setDecorationsList([
      ...decorationsList,
      { ...decoration, x: 100, y: 100 },
    ]);
  };

  return (
    <View style={styles.container}>
      {decorations.map((decoration) => (
        <TouchableOpacity key={decoration.id} onPress={() => addDecoration(decoration)}>
          <Image source={{ uri: decoration.uri }} style={styles.thumbnail} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 10 },
  thumbnail: { width: 50, height: 50, marginRight: 10 },
});
