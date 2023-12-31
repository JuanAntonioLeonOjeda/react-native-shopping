import { StyleSheet, TouchableOpacity, Alert, Text, Image } from "react-native";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListContext from "../context/newListContext";

export default function Button ({navigation, title, route}) {
  const {setAdded} = useContext(ListContext)
  const handlePress = () => {
    if (route === 'Productos') {
      navigation.navigate('Productos', { screen: 'Productos_Main' })
    } else if (route === 'Cestas') {
      navigation.navigate("Cestas", { screen: "Cestas_Main" });
    } else {
      if (route === "NewList") {
        setAdded([])
      }
      navigation.navigate(route)
    }
  }

  const displayIcon = () => {
    switch (route) {
      case "Cestas":
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/lists.png")}
          />
        );
      case "Productos":
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo.png")}
          />
        );
      case "ProductList":
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/productList.png")}
          />
        );
      case "NewProduct":
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/newProduct.png")}
          />
        );
      case "NewList":
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/newList.png")}
          />
        );
      case "MyLists":
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/myLists.png")}
          />
        );
      case "History":
        return <FontAwesome name="history" size={100} color="black" />;
    }
  }

  const getStyle = () => {
    switch (route) {
      case "NewList":
        return 'newList'
      case "Products":
        return 'products'
      case "History":
        return 'history'
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, styles[getStyle()]]}
    >
      { displayIcon() }
      <Text>{ title }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "60%",
    height: "30%",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  newList: {
    // backgroundColor: "lightblue",
  },
  products: {
    // backgroundColor: "lightgreen",
  },
  history: {
    backgroundColor: "lightyellow",
  },
  tinyLogo: {
    width: '90%',
    height: '90%'
  },
});