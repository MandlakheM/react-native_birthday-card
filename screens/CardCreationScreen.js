import React, { useState } from "react";
import { View, Button, ImageBackground, StyleSheet, Text } from "react-native";
import BackgroundSelector from "../components/BackgroundSelector";
import TextEditor from "../components/TextEditor";
import PreviewScreen from "./PreviewScreen";

export default function CardCreationScreen() {
  const [background, setBackground] = useState(null);
  const [texts, setTexts] = useState([]);
  const [decorations, setDecorations] = useState([]);
  const [preview, setPreview] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        {texts.map((text, index) => (
          <Text
            key={index}
            style={{
              position: "absolute",
              top: text.y,
              left: text.x,
              fontSize: text.fontSize,
              color: text.color,
            }}
          >
            {text.content}
          </Text>
        ))}
      </ImageBackground>

      <Text style={styles.text}>Select your birth day card template.</Text>
      <BackgroundSelector setBackground={setBackground} />
      <TextEditor texts={texts} setTexts={setTexts} />
      <Button title="Preview Card" onPress={() => setPreview(!preview)} />
      {preview && (
        <PreviewScreen
          background={background}
          texts={texts}
          decorations={decorations}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { textAlign: "center", fontSize: 25 },
});
