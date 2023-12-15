import { StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button ({title}) {
  const handlePress = () => {
    Alert.alert("Simple button pressed")
  }

  const displayIcon = () => {
    switch (title) {
      case 'Nueva Lista':
        return <Feather name="shopping-cart" size={100} color="black" />
      case 'Productos':
        return <MaterialCommunityIcons name="food-apple" size={100} color="black" />
      case 'Historial':
        return <FontAwesome name="history" size={100} color="black" />
    }
  }

  const getStyle = () => {
    switch (title) {
      case "Nueva Lista":
        return 'newList'
      case "Productos":
        return 'products'
      case "Historial":
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
    height: "25%",
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