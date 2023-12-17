import { StyleSheet, View, Text } from "react-native";

export default function NewList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New List</Text>
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
  },
  title: {
    fontSize: 40,
  },
});
