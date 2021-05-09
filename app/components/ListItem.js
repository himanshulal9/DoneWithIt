import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText extraStyle={styles.title}>{title}</AppText>
        <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.black,
    marginBottom: 5,
    fontSize: 20,
  },
  subTitle: {
    color: colors.grey,
    marginBottom: 5,
    fontSize: 18,
  },
});

export default ListItem;
