import { Button, Image, Text, TextInput, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import renamePathAndMove from "../../utils/renamePath";
import { addLocation } from "../../features/locations";

import { styles } from "./styles";

const SaveLocationScreen = () => {
  const [title, setTitle] = React.useState("");
  const [picture, setPicture] = React.useState("");

  const dispatch = useDispatch();

  const handlePickLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    console.log(status);
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
    console.log(image);
    setPicture(image.uri);
  };

  const handleConfirm = async () => {
    const path = await renamePathAndMove(picture);
    console.log(path);
    dispatch(addLocation({ title, picture, id: Date.now() }));
    setTitle("");
    setPicture("");
  };

  return (
    <View style={styles.container}>
      <Text>Nueva dirección</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Título" />
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : null}
      <Button title="Tomar una foto" onPress={handleTakePicture} />
      <Button title="Seleccionar de la galería" onPress={handlePickLibrary} />
      <Button title="Confirmar" onPress={handleConfirm}></Button>
    </View>
  );
};

export default SaveLocationScreen;
