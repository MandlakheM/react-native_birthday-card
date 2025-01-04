import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const backgrounds = [
  { id: 1, uri: 'https://i.pinimg.com/564x/a9/71/a2/a971a284afbd4065ffce25457a493ce6.jpg' },
  { id: 3, uri: 'https://i.pinimg.com/564x/83/fc/fd/83fcfd6f22f6bdeef2bf9542256e191a.jpg' },
  { id: 4, uri: 'https://i.pinimg.com/564x/29/ef/6b/29ef6bb07957686ff1bf2abaa12997de.jpg' },
  { id: 5, uri: 'https://i.pinimg.com/564x/d1/1b/8e/d11b8e1c59b22554b77af026cf3e9fcd.jpg'},
  { id: 6, uri: 'https://i.pinimg.com/564x/cf/05/69/cf056915271da312cb0d7ce2bcc5caf4.jpg'}
];

export default function BackgroundSelector({ setBackground }) {
  return (
    <View style={styles.container}>
      {backgrounds.map((bg) => (
        <TouchableOpacity key={bg.id} onPress={() => setBackground({ uri: bg.uri })}>
          <Image source={{ uri: bg.uri }} style={styles.thumbnail} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 10 },
  thumbnail: { width: 80, height: 80, marginRight: 10 },
});
