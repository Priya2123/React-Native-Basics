import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const ImageDetail = ({ imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
      <Text>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.27,
    width: width * 1,
  },
});

export default ImageDetail;
