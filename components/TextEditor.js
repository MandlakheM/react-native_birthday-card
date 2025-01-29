import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const FONTS = [
  { name: "Default", value: undefined },
  { name: "Arial", value: "Arial" },
  { name: "Times New Roman", value: "Times New Roman" },
  { name: "Courier New", value: "Courier New" },
  { name: "Georgia", value: "Georgia" },
];

export default function TextEditor({ texts, setTexts }) {
  const [isMinimized, setIsMinimized] = useState(true);
  const [text, setText] = useState("");
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedFont, setSelectedFont] = useState(FONTS[0]);
  const [editingIndex, setEditingIndex] = useState(null);

  const colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFA500",
    "#7D83F2",
    "#BF1363",
    "#C02148",
  ];

  const handleAddOrUpdateText = () => {
    if (editingIndex !== null) {
      const updatedTexts = texts.map((item, index) =>
        index === editingIndex
          ? {
              ...item,
              content: text,
              x,
              y,
              fontSize,
              color: selectedColor,
              fontFamily: selectedFont.value,
            }
          : item
      );
      setTexts(updatedTexts);
    } else {
      setTexts([
        ...texts,
        {
          content: text,
          x,
          y,
          fontSize,
          color: selectedColor,
          fontFamily: selectedFont.value,
        },
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setText("");
    setX(50);
    setY(50);
    setFontSize(16);
    setSelectedColor("#000000");
    setSelectedFont(FONTS[0]);
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

  if (isMinimized) {
    return (
      <TouchableOpacity
        style={styles.minimizedContainer}
        onPress={() => setIsMinimized(false)}
      >
        <Text>📝 Click to Open Text Editor</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Text Editor</Text>
        <TouchableOpacity onPress={() => setIsMinimized(true)}>
          <Text>Minimize ▼</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.editorContent}>
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

        {/* <View style={styles.fontSelector}>
          <Text>Font Family:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FONTS.map((font) => (
              <TouchableOpacity
                key={font.name}
                style={[
                  styles.fontButton,
                  selectedFont.name === font.name && styles.selectedFont,
                ]}
                onPress={() => setSelectedFont(font)}
              >
                <Text style={{ fontFamily: font.value }}>{font.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View> */}

        <View style={styles.colorPicker}>
          <Text>Pick Color:</Text>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                selectedColor === color && styles.selectedColor,
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>

        <Text style={styles.listHeader}>Texts:</Text>
        {texts.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleEditText(index)}>
            <Text style={{ color: item.color, fontSize: item.fontSize }}>
              {item.content}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddOrUpdateText}
        >
          <Text style={styles.buttonTitle}>
            {editingIndex !== null ? "Update Text" : "Add Text"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECFFB0",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    maxHeight: "50%",
  },
  minimizedContainer: {
    padding: 10,
    backgroundColor: "#ECFFB0",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editorContent: {
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  smallInput: {
    borderBottomWidth: 1,
    width: 50,
    marginHorizontal: 5,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  fontSelector: {
    marginVertical: 10,
  },
  fontButton: {
    padding: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  selectedFont: {
    backgroundColor: "#e3e3e3",
  },
  colorPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#000",
  },
  addButton: {
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
