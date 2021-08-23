import React, { useState, useEffect } from "react";
//we wrap our app with the theme provider.
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfractructure/theme/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/insfractructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPWcOoh_ZtbTPsLTTo_ScVV_fIkH7IFLQ",
  authDomain: "mealstogo-47138.firebaseapp.com",
  projectId: "mealstogo-47138",
  storageBucket: "mealstogo-47138.appspot.com",
  messagingSenderId: "852128615350",
  appId: "1:852128615350:web:742e0675f63d911eaa8f17",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
