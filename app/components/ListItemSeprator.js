import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function ListItemSeprator() {
  return <View style={styles.listSeprator}></View>;
}

const styles = StyleSheet.create({
  listSeprator: {
    width: "100%",
    height: "2px",
    backgroundColor: colors.black,
  },
});
