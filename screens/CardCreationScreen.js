import React from "react";
import {
  View,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BackgroundSelector from "../components/BackgroundSelector";
import TextEditor from "../components/TextEditor";

export default function CardCreationScreen({
  cardData,
  setCardData,
  onPreview,
}) {
  const handleBackgroundSelect = (background) => {
    setCardData((prev) => ({
      ...prev,
      background,
    }));
  };

  const handleTextsUpdate = (texts) => {
    setCardData((prev) => ({
      ...prev,
      texts,
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainContent}>
        <View style={styles.cardPreview}>
          <ImageBackground
            source={cardData.background}
            style={styles.background}
            imageStyle={styles.backgroundImage}
          >
            {cardData.texts.map((text, index) => (
              <Text
                key={index} 
                style={{
                  position: "absolute",
                  top: text.y,
                  left: text.x,
                  fontSize: text.fontSize,
                  color: text.color,
                  fontFamily: text.fontFamily,
                }}
              >
                {text.content}
              </Text>
            ))}
          </ImageBackground>
        </View>

        <View style={styles.templateSection}>
          <Text style={styles.sectionTitle}>
            Select your birthday card template
          </Text>
          <BackgroundSelector setBackground={handleBackgroundSelect} />
        </View>

        <View style={styles.previewButtonContainer}>
          {/* <Button title="Preview Card" disabled={!cardData.background} /> */}
          <TouchableOpacity
            style={styles.previewButton}
            onPress={onPreview}
            disabled={!cardData.background}
          >
            <Text style={styles.buttonTitle}>Preview Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TextEditor texts={cardData.texts} setTexts={handleTextsUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECFFB0",
  },
  mainContent: {
    flex: 1,
  },
  cardPreview: {
    height: 600,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  templateSection: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#040F0F",
  },
  previewButtonContainer: {
    padding: 10,
    marginBottom: 20,
  },
  previewButton: {
    backgroundColor: "#4C956C",
    height: 40,
    borderRadius: 10,
  },
  buttonTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    paddingTop: 5,
  },
});
