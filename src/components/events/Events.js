import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CategoryHeader from "../categories/CategoryHeader";
import speakersdata from "./eventdata";

const Events = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SpeakerScreen",{id:item.id})}
      >
        <Image style={styles.cover} source={{ uri: item?.src }} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <CategoryHeader name="Konuşmacılar" press="FavoriSpeakers" />
      <FlatList
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.src}
        data={speakersdata} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {},
  cover: {
    width: 150,
    height: 150,
    marginHorizontal: 8,
    borderRadius: 8,
  }
})


export default Events;
