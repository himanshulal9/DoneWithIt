import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import ListItem from "./ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailContainer}>
        <AppText extraStyle={styles.title}> A red jacket for sale</AppText>
        <AppText extraStyle={styles.price}>$100</AppText>

        {/* listItem for showing posted user details . */}
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={"Himanshu lal"}
          subTitle={"5 Listing"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
