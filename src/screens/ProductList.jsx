import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Item,
  SafeAreaView,
  ScrollView,
  StatusBar
} from "react-native";
import { useQuery } from "react-query";

import { getAllProducts } from "../firebase/productQueries";

import ListItem from "../components/ListItem";

export default function Products() {
  const { isLoading, data } = useQuery("products", getAllProducts);

  const displayProducts = () => {
    if (isLoading) return <Text>Loading...</Text>;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.list}>
          <FlatList
            style={styles.list}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem info={item} />}
          />
        </ScrollView>
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
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 40,
  },
  list: {
    width: "100%"
  }
});
