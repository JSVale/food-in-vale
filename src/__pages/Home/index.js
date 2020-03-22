import React from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Pages from "../../__routes/Pages";
import styles from "./styles";

export default function() {
  const categories = [
    {
      id: 1,
      url:
        "https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg",
      title: "Lanches"
    },
    {
      id: 2,
      url: "https://images4.alphacoders.com/943/943258.jpg",
      title: "Massas"
    },
    {
      id: 3,
      url: "https://images7.alphacoders.com/404/404658.jpg",
      title: "Bolos"
    },
    {
      id: 4,
      url:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/28/11/sushi-istock.gif",
      title: "Japonesa"
    },
    {
      id: 5,
      url:
        "https://i.pinimg.com/originals/1f/97/96/1f979673442679706640df8c0cfb70a4.jpg",
      title: "Brasileira"
    }
  ];

  const restaurants = [
    {
      id: 1,
      title: "Restaurante do Boteco",
      distance: 2.7,
      delivery_time: "10 - 15 min",
      delivery_price: "R$5,00",
      minimum_price: 12,
      category: "Lanches",
      image_url:
        "https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg"
    },
    {
      id: 2,
      title: "Tempesto",
      distance: 9.8,
      delivery_time: "40 - 50 min",
      delivery_price: "R$1,00",
      minimum_price: 12,
      category: "Lanches",
      image_url:
        "https://image.shutterstock.com/image-vector/restaurant-logo-template-260nw-1254530365.jpg"
    },
    {
      id: 3,
      title: "Boca nervosa",
      distance: 1.5,
      delivery_time: "80 - 120 min",
      delivery_price: "R$2,00",
      minimum_price: 12,
      category: "Lanches",
      image_url:
        "https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg"
    },
    {
      id: 4,
      title: "Restaurante do Boteco",
      distance: 2,
      delivery_time: "30 - 40 min",
      delivery_price: "R$3,00",
      minimum_price: 12,
      category: "Lanches",
      image_url:
        "https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_570xN.1431687786_w5a8.jpg"
    }
  ];

  const navigation = useNavigation();

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
          <TextInput placeholder="Buscar..." style={styles.searchBar} />
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
