import React from "react";
import { Text, View } from "react-native";
import colors from "../config/colors";

function Button({ title }) {
  return (
    <View style={styles.button}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItem: "center",
    borderRadius: 25,
  },
});
export default Button;
