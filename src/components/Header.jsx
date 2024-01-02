import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Header ({ title }){
  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 30
  },
})
