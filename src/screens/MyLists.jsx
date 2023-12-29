import { StyleSheet, View, Text } from "react-native";

export default function MyLists({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Mis Cestas</Text>
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
