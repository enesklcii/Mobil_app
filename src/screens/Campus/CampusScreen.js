import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import MapView, { MapCallout, MapMarker, Marker } from "react-native-maps";
import { INITAL_REGION, SamsunUniversity, markers } from "./locations";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const CampusScreen = ({ navigation }) => {
  const mapRef = useRef();

  const handleRegionChange=(region)=>{
    console.log(region)
  }

  const handlePress = () => {
    mapRef.current.animateCamera(
      { center: SamsunUniversity, zoom: 15 },
      { duration: 5000 }
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handlePress}>
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });

  const { container, map } = styles;
  return (
    <View style={container}>
      <MapView
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITAL_REGION}
        ref={mapRef}
        style={map}
        // onRegionChange={(region)=>handleRegionChange(region)}
        onRegionChangeComplete ={(region)=>handleRegionChange(region)}
      >
        {markers.map((item,index)=>(
            <MapMarker key={index} coordinate={item} >
            <MapCallout>
                <Text>{item.name}</Text>
            </MapCallout>
            </MapMarker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default CampusScreen;
