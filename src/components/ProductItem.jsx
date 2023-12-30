import { View, Text, StyleSheet, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons";

export default function ProductItem({ info, add }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{info.name}</Text>
      <Ionicons
        name="add-circle-outline"
        size={24}
        onPress={() => add(info.name)}
        color="#2196f3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
    margin: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    flex: 1,
    fontSize: 20,
  }
});
