import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children, extraStyle }) {
  return <Text style={[styles.text, extraStyle]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppText;
