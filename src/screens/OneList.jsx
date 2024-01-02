import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState } from "react";

import ProductItem from "../components/ProductItem"
import Header from "../components/Header"

export default function OneList({ navigation, route }) {
  const { products } = route.params
  const [selected, setSelected] = useState([])

  const isSelected = (item) => {
    return selected.find((product) => product === item);
  }

  const addProduct = (item) => {
    if (!isSelected(item)) {
      setSelected((prev) => [...prev, item]);
    } else {
      setSelected((prev) => prev.filter((p) => p !== item));
    }
  }

  const displayList = () => {
    console.log(products)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProductItem 
              info={item} 
              navigation={navigation}
              selected={isSelected(item.name)}
              addToCart={addProduct}
            />
          )}
        />
      </SafeAreaView>
    );
  };

  return (
    <>
      <Header title={"Kimchi's Purr-chases"} />
      <View style={styles.container}>
        {displayList()}
      </View>
    </>
  )
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
