import { StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button ({navigation, title, route}) {
  const handlePress = () => {
    navigation.navigate(route)
  }

  const displayIcon = () => {
    switch (route) {
      case 'NewList':
        return <Feather name="shopping-cart" size={100} color="black" />
      case 'Products':
        return <MaterialCommunityIcons name="food-apple" size={100} color="black" />
      case 'History':
        return <FontAwesome name="history" size={100} color="black" />
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
    width: "60%",
    height: "30%",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  newList: {
    backgroundColor: "lightblue",
  },
  products: {
    backgroundColor: "lightgreen",
  },
  history: {
    backgroundColor: "lightyellow",
  },
});