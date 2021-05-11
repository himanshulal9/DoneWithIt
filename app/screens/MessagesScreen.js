import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
  {
    id: "1",
    title: "title1",
    description: "description1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: "2",
    title: "title2",
    description: "description2",
    image: require("../assets/mosh.jpg"),
  },
],

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({item}) => (
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

export default MessagesScreen;
