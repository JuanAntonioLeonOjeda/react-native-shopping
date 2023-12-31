import { StyleSheet, View, Text } from "react-native"
import { useQuery } from "react-query"

import { getAllLists } from "../firebase/listsQueries"

export default function MyLists({ navigation }) {
  const { isLoading, data, refetch } = useQuery("lists", getAllLists)
  console.log(data)
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
