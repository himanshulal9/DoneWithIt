import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, imageurl }) {
  return (
    <View style={styles.card}>
      <Image source={imageurl} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <AppText extraStyle={styles.title}>{title}</AppText>
        <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
export default Card;
