import { Button, Image, Text, TextInput, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import renamePathAndMove from "../../utils/renamePath";
import { addLocation, addLocationDb } from "../../features/locations";

import { styles } from "./styles";

const SaveLocationScreen = ({ navigation, route }) => {
  const [title, setTitle] = React.useState("");
  const [picture, setPicture] = React.useState("");

  const { params } = route;

  const dispatch = useDispatch();

  const handlePickLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    // console.log(status);
    if (status !== "granted") {
      return false;
    }
    return true;
  };

  const handleTakePicture = async () => {
    const isVerified = getPermission();
    if (!isVerified) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    // console.log(image);
    setPicture(image.uri);
  };

  const handleConfirm = async () => {
    const path = await renamePathAndMove(picture);
    // console.log(path);
    let id = Date.now()
    dispatch(
      addLocation({ title, picture, id, address: params?.address })
    );
    dispatch(addLocationDb({title, picture, id, address:params?.address}))
    setTitle(""); 
    setPicture("");
    navigation.navigate("SaveLocation");
  };

  const handleGetLocation = () => {
    navigation.navigate("GetLocation");
  };

  const handleSetLocation = () => {
    navigation.navigate("SetLocation");
  };

  return (
    <View style={styles.container}>
      <Text>Nueva direcci??n</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="T??tulo" />
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : (
        <View style={styles.noPic}>
          <Text>Sin Imagen</Text>
        </View>
      )}
      <View style={styles.btnsContainer}>
        <Button title="Tomar una foto" onPress={handleTakePicture} />
        <Button title="Seleccionar de Galer??a" onPress={handlePickLibrary} />
      </View>
      {params?.address ? (
        <Text>{params?.address}</Text>
      ) : (
        <Text>Debes establecer una direcci??n</Text>
      )}
      <View style={styles.btnsContainer}>
        <Button title="Obtener Ubicaci??n" onPress={handleGetLocation}></Button>
        <Button
          title="Establecer Ubicaci??n"
          onPress={handleSetLocation}
        ></Button>
      </View>
      <Button
        title="Confirmar"
        onPress={handleConfirm}
        disabled={!params?.address || !picture || !title}
      ></Button>
    </View>
  );
};

export default SaveLocationScreen;
