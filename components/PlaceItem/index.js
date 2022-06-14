import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { removeLocation, removeLocationDb } from "../../features/locations";

const PlaceItem = ({ onSelect, item }) => {

  const dispatch = useDispatch()

  const onRemove = () => {
    dispatch(removeLocationDb({ id: item.id }))
    dispatch(removeLocation({ id: item.id }))
  }
  console.log(item)
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Entypo name="trash" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PlaceItem;
