import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image
} from "react-native"
import { useState } from "react";
import { useQuery } from "react-query";

import { getAllProducts } from "../firebase/productQueries";

import ListItem from "../components/ListItem"
import SearchBar from "../components/SearchBar"

export default function Products({navigation}) {
  const { isLoading, data, refetch } = useQuery("products", getAllProducts)
  const [searchQuery, setSearchQuery] = useState('')

  const filterProducts = data?.filter(product => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const displayProducts = (refetch) => {
    if (isLoading) return (
      <>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/loading.png")}
        />
        <Text>
          Cargando...
        </Text>
      </>
    )
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
          <FlatList
            style={styles.list}
            data={filterProducts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <ListItem info={item} refetch={refetch} navigation={navigation}/>}
          />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      {displayProducts(refetch)}
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
    paddingTop: StatusBar.currentHeight,
  },
  list: {
    width: "100%",
  },
  tinyLogo: {
    width: "100%",
    height: "60%",
  },
});
