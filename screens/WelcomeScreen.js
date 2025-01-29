import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ onStart }) {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/f0/40/a2/f040a2f310ea3ca87aa6d87b975498df.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Your Birthday Card!</Text>
        <TouchableOpacity onPress={onStart} style={styles.button}>
          <Text style={styles.buttonTitle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "-10%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "purple",
    height: 40,
    width: 120,
    borderRadius: 10,
    paddingTop: 10
  },
  buttonTitle: {
    color: "white",
    textAlign: "center",
    alignSelf: "center"
  },
});
