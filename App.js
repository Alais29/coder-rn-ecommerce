import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import store from "./Store";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigation from "./Navigation";

import { init } from './db';

init()
.then(()=> {console.log('Db initialized');})
.catch((err)=> {
  console.log('Error loading db');
  console.log(err.message);
})

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
    // <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <MainNavigation />
    </Provider>
    // </SafeAreaView>
  );
}
