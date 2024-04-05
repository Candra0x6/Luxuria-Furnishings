import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import HomeStack from "./app/screen/HomeStack";
// config.ts

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/font/inter.ttf"),
    InterMedium: require("./assets/font/static/Inter-Medium.ttf"),
    InterSemiBold: require("./assets/font/static/Inter-SemiBold.ttf"),
    InterRegular: require("./assets/font/static/Inter-Regular.ttf"),
    InterBold: require("./assets/font/static/Inter-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
