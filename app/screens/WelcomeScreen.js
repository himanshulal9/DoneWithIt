import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import image from "../assets/background.jpg";
import colors from "../config/colors";

const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need !</Text>
      </View>
      <View style={styles.loginButton}>
        <Text>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text>Signup</Text>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
