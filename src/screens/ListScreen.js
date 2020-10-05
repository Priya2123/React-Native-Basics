import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  //array - gets converted into a list
  const friends = [
    { name: "Friend 1" },
    { name: "Friend 2" },
    { name: "Friend 3" },
    { name: "Friend 4" },
    { name: "Friend 5" },
    { name: "Friend 6" },
    { name: "Friend 7" },
    { name: "Friend 8" },
    { name: "Friend 9" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      //renderItem gets called with each individual item (item: {name: 'Friend '})
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} </Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
