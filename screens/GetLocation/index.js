import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { GOOGLE_API_KEY } from "../../Constants/googleAPI";

//https://developers.google.com/maps/documentation/maps-static/start DOC API
//https://developers.google.com/maps/documentation/maps-static/start#Markers Markers DOC

const GetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [photo, setPhoto] = useState(null);

  //Efecto para traer la ubicación apenas renderiza
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      // console.log(location);
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    })();
  }, []);

  //Efecto para traer el mapa y luego hacer un reverse geoCode a partir de las coordenadas
  useEffect(() => {
    if (location?.lat) {
      (async () => {
        // console.log("Entro");
        // console.log(location);
        //Seteamos la url de la foto
        setPhoto(
          `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x600&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
        );
        // Reverse geocode
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
        );
        const reverseGeocode = await response.json();
        // console.log("reverseGeocode", reverseGeocode);
        const address = reverseGeocode.results[0].formatted_address;
        setAddress(address);
      })();
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = address;
  }

  // console.log(photo);

  const handleConfirmLocation = () => {
    navigation.navigate("SaveLocation", { address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <View>
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{ width: Dimensions.get("screen").width, height: 500 }}
          />
        ) : null}
        {address ? (
          <>
            <Button
              title="Confirmar dirección"
              onPress={handleConfirmLocation}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};

export default GetLocationScreen;

const styles = StyleSheet.create({});
