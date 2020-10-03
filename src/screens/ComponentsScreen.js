import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const random = ["abcd", "efgh"];
  const random_two = <Text style={{ fontSize: 20 }}>Hey, My name is Piya</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={{ color: "red" }}>{random}</Text>
      {random_two}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
