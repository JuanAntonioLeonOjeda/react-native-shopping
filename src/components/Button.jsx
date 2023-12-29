import { StyleSheet, TouchableOpacity, Alert, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button ({navigation, title, route}) {
  const handlePress = () => {
    if (route === 'Productos') {
      navigation.navigate('Productos', { screen: 'Productos_Main' })
    } else if (route === 'Listas') {
      navigation.navigate("Listas", { screen: "Listas_Main" });
    } else {
      navigation.navigate(route)
    }
  }

  const displayIcon = () => {
    switch (route) {
      case 'Listas':
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/lists.png")}
          />
        );
      case 'Productos':
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo.png")}
          />
        );
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