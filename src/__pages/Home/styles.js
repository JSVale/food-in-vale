import { StyleSheet } from "react-native";
import Contants from "expo-constants";
import colors from "../../__styles/colors";

export default StyleSheet.create({
  window: {
    backgroundColor: "#FFF",
    flex: 1
  },

  container: {
    marginTop: Contants.statusBarHeight,
    marginHorizontal: 20,
    flex: 1
  },

  titleRow: {
    marginTop: 10,
    flex: 1
  },
  title: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 26,
    fontWeight: "bold"
  },

  searchBarRow: {
    marginTop: 20,
    flex: 1
  },
  searchBar: {
    borderColor: colors.border,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: "#F1F1F1"
  },

  categoryRow: {
    flex: 3
  },
  categoryTitleRow: {
    marginBottom: 5
  },
  categoryTitle: {
    fontSize: 18
  },
  categoryItem: {
    paddingVertical: 5,
    paddingRight: 10
  },
  categoryImage: {
    width: 100,
    height: 60
  },
  categoryText: {
    textAlign: "center"
  },

  restaurantRow: {
    flex: 8
  },
  restaurantTitleRow: {
    marginBottom: 5
  },
  restaurantTitle: {
    fontSize: 18
  },
  restaurantItemContainer: {
    flexDirection: "row",
    marginVertical: 5,
    borderColor: colors.border,
    borderWidth: 1,
    height: 80
  },
  restaurantItemImageColumn: {
    flex: 1,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    padding: 5
  },
  restaurantItemImage: {
    width: "100%",
    height: "100%"
  },
  restaurantItemTextColumn: {
    flex: 2,
    padding: 5,
    justifyContent: "space-around"
  }
});
