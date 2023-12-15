import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const handlePress = () => {
    Alert.alert('Simple button pressed')
  }

  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.container}>
        <Text style={styles.title}>ShopTogether</Text>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.Button, styles.newList]}
        >
          <Feather name="shopping-cart" size={100} color="black" />
          <Text>Nueva Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.Button, styles.products]}
        >
          <MaterialCommunityIcons name="food-apple" size={100} color="black" />
          <Text>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.Button, styles.history]}
        >
          <FontAwesome name="history" size={100} color="black" />
          <Text>Historial</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
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
  title: {
    fontSize: 40,
  },
});
