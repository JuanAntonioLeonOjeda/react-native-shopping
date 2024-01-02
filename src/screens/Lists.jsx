import { StyleSheet, View } from "react-native"

import Button from "../components/Button"
import Header from "../components/Header"

export default function Lists({ navigation }) {

  return (
    <>
      <Header title={"Kimchi's Purr-chases"} />
      <View style={styles.container}>
        <Button
          title={"Nueva Cesta"}
          route={"NewList"}
          navigation={navigation}
        />
        <Button
          title={"Mis Cestas"}
          route={"MyLists"}
          navigation={navigation}
        />
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
  },
});
