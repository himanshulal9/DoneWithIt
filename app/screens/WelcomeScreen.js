import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import image from "../assets/background.jpg";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground blurRadius={7} source={image} style={styles.image}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need !</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={"login"} onPress={() => console.log("Tapped")} />
        <AppButton
          title={"register"}
          color='secondary'
          onPress={() => console.log("register Tapped")}
        />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 75,
  },
  logo: {
    width: 150,
    height: 150,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    paddingVertical: 10,
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
});

export default WelcomeScreen;
