import { StyleSheet, View } from "react-native"

import Button from "../components/Button"
import Header from "../components/Header"

export default function Products({ navigation }) {

  return (
    <>
      <Header title={"Kimchi's Purr-chases"} />
      <View style={styles.container}>
        <Button title={"Añadir Producto"} route={"NewProduct"} navigation={navigation} />
        <Button title={"Lista Productos"} route={"ProductList"} navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  }
});
