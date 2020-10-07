import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increasing"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decreasing"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={{ textAlign: "center" }}>Counter Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
