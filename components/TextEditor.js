import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TextEditor({ texts, setTexts }) {
  const [text, setText] = useState("");
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [editingIndex, setEditingIndex] = useState(null);

  const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFA500"]; 

  const handleAddOrUpdateText = () => {
    if (editingIndex !== null) {
      const updatedTexts = texts.map((item, index) =>
        index === editingIndex
          ? { ...item, content: text, x, y, fontSize, color: selectedColor }
          : item
      );
      setTexts(updatedTexts);
    } else {
      setTexts([...texts, { content: text, x, y, fontSize, color: selectedColor }]);
    }

    setText("");
    setX(50);
    setY(50);
    setFontSize(16);
    setSelectedColor("#000000");
    setEditingIndex(null);
  };

  const handleEditText = (index) => {
    const item = texts[index];
    setText(item.content);
    setX(item.x);
    setY(item.y);
    setFontSize(item.fontSize);
    setSelectedColor(item.color);
    setEditingIndex(index);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
      />
      <View style={styles.row}>
        <Text>Position X:</Text>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          value={String(x)}
          onChangeText={(value) => setX(Number(value))}
        />
        <Text>Y:</Text>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          value={String(y)}
          onChangeText={(value) => setY(Number(value))}
        />
      </View>
      <View style={styles.row}>
        <Text>Font Size:</Text>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          value={String(fontSize)}
          onChangeText={(value) => setFontSize(Number(value))}
        />
      </View>
      <View style={styles.colorPicker}>
        <Text>Pick Color:</Text>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
      <Button title={editingIndex !== null ? "Update Text" : "Add Text"} onPress={handleAddOrUpdateText} />
      <Text style={styles.listHeader}>Texts:</Text>
      {texts.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleEditText(index)}>
          <Text style={{ color: item.color, fontSize: item.fontSize }}>
            {item.content}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderBottomWidth: 1, marginBottom: 10 },
  smallInput: { borderBottomWidth: 1, width: 50, marginHorizontal: 5, textAlign: "center" },
  row: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  colorPicker: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  listHeader: { marginTop: 10, fontWeight: "bold" },
});
