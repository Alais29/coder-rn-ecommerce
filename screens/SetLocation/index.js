import React, { useEffect, useState } from "react";
import { View, Text, Button, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_API_KEY } from "../../Constants/googleAPI";

import { styles } from "./styles";

const SetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [errorMsg, setErrorMsg] = useState(null);

  const initialRegion = {
    latitude: 37,
    longitude: -122,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const handleLocation = (event) => {
    setLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleConfirm = async () => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
    );
    const reverseGeocode = await response.json();
    const address = reverseGeocode.results[0].formatted_address;
    navigation.navigate("SaveLocation", { address });
  };

  return (
    <>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          <MapView
            initialRegion={initialRegion}
            style={{ width: Dimensions.get("screen").width, height: 500 }}
            onPress={handleLocation}
          >
            {location.lat ? (
              <Marker
                title="Ubicación seleccionada"
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
              />
            ) : null}
          </MapView>
          <Button title="Confirmar ubicación" onPress={handleConfirm} />
        </>
      )}
    </>
  );
};

export default SetLocationScreen;
