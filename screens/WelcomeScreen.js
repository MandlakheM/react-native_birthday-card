import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen({ toggleCreate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Birthday Card!</Text>
      <Button title="Get Started" onPress={toggleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
