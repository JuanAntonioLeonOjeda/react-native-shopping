import { StyleSheet, View, Text } from "react-native"

import Button from "../components/Button"

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kimchi's Purr-chases</Text>
      <Button title={"Cestas"} route={"Cestas"} navigation={navigation} />
      <Button title={"Productos"} route={"Productos"} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40
  },
});