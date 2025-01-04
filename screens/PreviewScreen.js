import React from "react";
import { View, Button, ImageBackground, Text, StyleSheet } from "react-native";

export default function PreviewScreen({ background, texts, decorations }) {
  const handleShare = async () => {
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        {texts.map((text, index) => (
          <Text
            key={index}
            style={{ position: "absolute", top: text.y, left: text.x }}
          >
            {text.content}
          </Text>
        ))}
      </ImageBackground>
      <Button title="Share Card" onPress={handleShare} />
      {/* <Button title="Return to Home" onPress={() => navigation.navigate('Welcome')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
});
