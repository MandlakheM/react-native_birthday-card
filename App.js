import { useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import CardCreationScreen from "./screens/CardCreationScreen";
import PreviewScreen from "./screens/PreviewScreen";
import { StatusBar } from "react-native";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [cardData, setCardData] = useState({
    background: null,
    texts: [],
  });

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <>
    <StatusBar />
      {currentScreen === "home" && (
        <WelcomeScreen onStart={() => navigateTo("create")} />
      )}
      {currentScreen === "create" && (
        <CardCreationScreen
          cardData={cardData}
          setCardData={setCardData}
          onPreview={() => navigateTo("preview")}
        />
      )}
      {currentScreen === "preview" && (
        <PreviewScreen
          cardData={cardData}
          onBack={() => navigateTo("create")}
          onShare={() => {
            /* Implement share functionality */
          }}
        />
      )}
    </>
  );
}
