import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../styles/colors";
import LogOutBtn from "../../../components/LogOutButton";
import LocationsScreen from "../../../screens/Locations";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SaveLocationScreen from "../../../screens/SaveLocation";
import GetLocationScreen from "../../../screens/GetLocation";
import SetLocationScreen from "../../../screens/SetLocation";

const Stack = createNativeStackNavigator();

const LocationsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Nunito",
          fontSize: 25,
        },
        headerTitleAlign: "center",
        headerRight: () => <LogOutBtn />,
      }}
    >
      <Stack.Screen
        name="Locations"
        component={LocationsScreen}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("SaveLocation")}
              >
                <AntDesign name="pluscircleo" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="SaveLocation"
        component={SaveLocationScreen}
        options={{
          title: "Guardar dirección",
          headerRight: () => {
            return (
              <TouchableOpacity>
                <AntDesign name="pluscircleo" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="GetLocation"
        component={GetLocationScreen}
        options={{
          title: "Obtener ubicación",
        }}
      />
      <Stack.Screen
        name="SetLocation"
        component={SetLocationScreen}
        options={{
          title: "Establecer ubicación",
        }}
      />
    </Stack.Navigator>
  );
};

export default LocationsStack;
