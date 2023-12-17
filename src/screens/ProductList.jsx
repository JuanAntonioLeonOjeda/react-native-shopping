import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Item,
  SafeAreaView,
} from "react-native";
import { useQuery } from "react-query";

import { getAllProducts } from "../firebase/productQueries";

import ListItem from "../components/ListItem";

export default function Products() {
  const { isLoading, data } = useQuery("products", getAllProducts);

  const displayProducts = () => {
    if (isLoading) return <Text>'Loading...'</Text>;
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem info={item} />}
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
    height: "100vh",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
});
