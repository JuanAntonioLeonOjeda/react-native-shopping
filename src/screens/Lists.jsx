import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

export default function Lists({ navigation }) {
  return (
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
