const liveHost = "https://us-central1-mealstogo-47138.cloudfunctions.net";
const localHost = "https://localhost:5001/mealstogo-47138/us-central1";
//console.log(process.env.NODE_ENV)
export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
