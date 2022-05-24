import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MainNavigation from "./Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    Rubik: require("./assets/fonts/Rubik/Rubik-Regular.ttf"),
    RubikBold: require("./assets/fonts/Rubik/Rubik-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation />
    </SafeAreaView>
  );
}
