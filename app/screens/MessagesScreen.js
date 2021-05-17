import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeprator from "../components/ListItemSeprator";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function MessagesScreen() {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: "5px",
    backgroundColor: colors.secondary,
  },
});
