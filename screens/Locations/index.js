import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import PlaceItem from "../../components/PlaceItem";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../features/locations";

const LocationsScreen = () => {
  const { locations } = useSelector((state) => state.locations);

  const dispatch = useDispatch()

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(getLocations())
    }
  }, [])

  const renderItem = ({ item }) => {
    return (
      <PlaceItem
        onSelect={() => { }}
        item={item}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={(location) => location.id}
      />
    </View>
  );
};

export default LocationsScreen;
