import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  Alert
} from "react-native";
import Axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Pages from "../../__routes/Pages";
import styles from "./styles";

export default function() {
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
    getRestaurants();
  }, []);

  useEffect(() => {
    getRestaurants(search);
  }, [search]);

  async function getCategories() {
    try {
      const response = await Axios.get(
        "https://raw.githubusercontent.com/codeeasy-dev/food-in-vale-dataset/master/categories.json"
      );

      if (!("data" in response)) throw response;

      setCategories(response.data);
    } catch (error) {
      // eslint-disable-next-line no-undef
      if (__DEV__) window.console.log(error);
      Alert.alert("AVISO", "Houve um erro ao selecionar as categorias.");
    }
  }

  async function getRestaurants(filterByName = "") {
    try {
      const response = await Axios.get(
        "https://raw.githubusercontent.com/codeeasy-dev/food-in-vale-dataset/master/restaurants.json"
      );

      if (!("data" in response)) throw response;

      const newRestaurants = filterByName
        ? response.data.filter(restaurant =>
            restaurant.title.includes(filterByName)
          )
        : response.data;

      setRestaurants(newRestaurants);
    } catch (error) {
      // eslint-disable-next-line no-undef
      if (__DEV__) window.console.log(error);
      Alert.alert("AVISO", "Houve um erro ao selecionar os restaurantes.");
    }
  }

  function Category({ item }) {
    return (
      <View style={styles.categoryItem}>
        <Image source={{ uri: item.url }} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    );
  }

  function Restaurant({ item }) {
    return (
      <View
        style={styles.restaurantItemContainer}
        onTouchEnd={() => navigation.navigate(Pages.RESTAURANT, { item })}
      >
        <View style={styles.restaurantItemImageColumn}>
          <Image
            source={{ uri: item.image_url }}
            style={styles.restaurantItemImage}
          />
        </View>
        <View style={styles.restaurantItemTextColumn}>
          <Text>{item.title}</Text>
          <Text>{`${item.category} - ${item.distance}km`}</Text>
          <Text>{`${item.delivery_time} - Entrega: ${item.delivery_price}`}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.window}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Food in Vale</Text>
        </View>

        <View style={styles.searchBarRow}>
          <TextInput
            placeholder="Buscar..."
            style={styles.searchBar}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <View style={styles.categoryRow}>
          <View style={styles.categoryTitleRow}>
            <Text style={styles.categoryTitle}>Categorias</Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Category item={item} />}
          />
        </View>

        <View style={styles.restaurantRow}>
          <View style={styles.restaurantTitleRow}>
            <Text style={styles.restaurantTitle}>Restaurantes</Text>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurants}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Restaurant item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
