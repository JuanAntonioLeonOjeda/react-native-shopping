import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar
} from "react-native";
import { useQuery } from "react-query";

import { getAllProducts } from "../firebase/productQueries";

import ListItem from "../components/ListItem";

export default function Products() {
  const { isLoading, data } = useQuery("products", getAllProducts);

  const displayProducts = () => {
    if (isLoading) return <Text>Loading...</Text>
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <ListItem info={item}/>}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      {displayProducts()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight
  },
  list: {
    width: "100%"
  }
});
