import React, { useRef } from "react";
import {
  View,
  Button,
  ImageBackground,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Share,
  Platform,
} from "react-native";
import ViewShot from "react-native-view-shot";

export default function PreviewScreen({ cardData, onBack, onShare }) {
  const viewShotRef = useRef();

  const handleShare = async () => {
    try {
      // Capture the card view as an image
      const uri = await viewShotRef.current.capture();

      // Prepare share options
      const shareOptions = {
        title: "Share Birthday Card",
        message: "Check out this birthday card I made!",
        url: Platform.OS === "ios" ? `file://${uri}` : uri,
        type: "image/jpeg",
      };

      // Show native share dialog
      const result = await Share.share(shareOptions);

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log("shared with activity type");
        } else {
          // shared
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log("dismissed");
      }
    } catch (error) {
      console.error("Error sharing card:", error);
      Alert.alert("Error", "Failed to share the card. Please try again.");
    }
  };
  return (
    // <Modal
    //   animationType="slide"
    //   presentationStyle="fullScreen"
    //   visible={true}
    // >
    <View style={styles.container}>
      <ViewShot
        ref={viewShotRef}
        options={{
          fileName: "birthday-card",
          format: "jpg",
          quality: 0.9,
          width: 600,
          height: 600,
          result: "data-url",
        }}
      >
        <View style={styles.cardPreview}>
          <ImageBackground
            source={cardData.background}
            style={styles.background}
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
      </ViewShot>
      <View style={styles.shareButtonContainer}>
        {/* <Button title="Preview Card" disabled={!cardData.background} /> */}
        <TouchableOpacity style={styles.buttons} onPress={onBack}>
          <Text style={styles.buttonTitle}>Back to Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={handleShare}>
          <Text style={styles.buttonTitle}>Share Card</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </Modal>
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
  shareButtonContainer: {
    padding: 10,
    marginTop: 50,
    gap: 10,
  },
  buttons: {
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
