import React from "react";
import { StatusBar, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function() {
  const {
    params: { item }
  } = useRoute();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>{item.title}</Text>
        <Text>{`${item.category} - ${item.distance}km - ${item.delivery_time}`}</Text>
        <Text>{`Entrega ${item.delivery_price}`}</Text>
      </View>
    </>
  );
}
