import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

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
      />
    </Screen>
  );
}
