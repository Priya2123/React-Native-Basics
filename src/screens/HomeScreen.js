import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  //console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="This is the Components Screen"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to the List view</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
