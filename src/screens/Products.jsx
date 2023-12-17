import { StyleSheet, View } from "react-native"
import Button from "../components/Button";

export default function Products({ navigation }) {

  return (
    <View style={styles.container}>
      <Button title={"Añadir Producto"} route={"NewProduct"} navigation={navigation} />
      <Button title={"Lista Productos"} route={"ProductList"} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
