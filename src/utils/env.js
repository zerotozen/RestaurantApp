import { Platform } from "react-native";
const liveHost = "https://us-central1-mealstogo-47138.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-47138/us-central1";

// console.log(process.env.NODE_ENV);

export const isAndroid = Platform.OS === "android";
export const isMock = true;
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
