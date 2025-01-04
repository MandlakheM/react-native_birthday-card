import { useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import CardCreationScreen from "./screens/CardCreationScreen.js";
import PreviewScreen from "./screens/PreviewScreen.js";
export default function App() {
  const [displayCreate, setDisplayCreate] = useState(false);
  const [displayHome, setDisplayHome] = useState(true);
  const [displayPreview, setDisplayPreview] = useState(false);

  const toggleCreate = () => {
    setDisplayCreate(!displayCreate);
    setDisplayHome(!displayHome);
  };

  const togglePreview = () => {
    setDisplayPreview(!displayPreview);
  };
  return (
    <>
      {displayHome && <WelcomeScreen toggleCreate={toggleCreate} />}
      {displayCreate && <CardCreationScreen togglePreview={togglePreview} />}
      {displayPreview && <PreviewScreen />}
    </>
  );
}
