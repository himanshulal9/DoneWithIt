import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.black,
    borderColor: colors.primary,
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 30,
    right: 30,
  },
});

export default ViewImageScreen;
