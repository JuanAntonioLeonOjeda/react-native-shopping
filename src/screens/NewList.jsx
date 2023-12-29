import { StyleSheet, View, Text } from "react-native"

export default function NewList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Nueva Cesta</Text>
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
