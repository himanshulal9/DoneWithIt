import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' size={30} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={30}
          color={colors.white}
        />
      </View>
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
    position: "absolute",
    top: 35,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 35,
    right: 30,
  },
});

export default ViewImageScreen;
