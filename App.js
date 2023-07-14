// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text } from 'react-native'
import React,{ useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplScreen from "expo-splash-screen";
import AppNavigation from './src/navigation';

const App = () => {
  // ------------------------------------------------------------
  // status bar color state
  // ------------------------------------------------------------
  const StyleTypes = ["default", "dark-content", "light-content"];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[0]);
  // ------------------------------------------------------------
  // fonts
  // ------------------------------------------------------------
  let [fontsLoaded] = useFonts({
    "Archivo-Regular": require("./assets/fonts/Archivo-Regular.ttf"),
    "Archivo-ExtraBold": require("./assets/fonts/Archivo-ExtraBold.ttf"),
    "FREEFATFONT-Regular": require("./assets/fonts/FREEFATFONT-Regular.otf"),
  });

  useEffect(() => {
    async function prepare(){
      await SplScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplScreen.hideAsync();
  }

  return (
    <AppNavigation />
  )
}

export default App