import { StyleSheet, View, Text, TextInput, Image, SafeAreaView, FlatList, StatusBar, Button } from "react-native"
import { useState } from "react"
import { useQuery } from "react-query"

import { getAllProducts } from "../firebase/productQueries"

import ProductListModal from "../components/ProductListModal"
import ProductItem from "../components/ProductItem"

export default function NewList({ navigation }) {
  const [name, setName] = useState('')
  const [added, setAdded] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const { isLoading, data, refetch } = useQuery("products", getAllProducts)

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false)
  }

  const isOnList = (item) => {
    return added.includes(item);
  }

  const addProduct = (item) => {
    if (!isOnList(item)) {
      setAdded((prev) => [...prev, item]);
    } else {
      setAdded((prev) => prev.filter((i) => i !== item))
    }
  }

  const displayProducts = (refetch) => {
    if (isLoading)
      return (
        <>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/loading.png")}
          />
          <Text>Cargando...</Text>
        </>
      );
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nombre"
        />
        <Button 
          title="Añadir Producto"
          onPress={openModal}
        />
        <ProductListModal
          visible={modalVisible}
          list={data}
          selected={isOnList}
          setList={addProduct}
          onClose={closeModal}
        />
        <FlatList
          style={styles.list}
          data={added}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ProductItem 
              info={item} 
              add={addProduct} 
            />)}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      { displayProducts() }
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
    width: "100%",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  list: {
    width: "100%",
  },
  tinyLogo: {
    width: "100%",
    height: "60%",
  }
});
