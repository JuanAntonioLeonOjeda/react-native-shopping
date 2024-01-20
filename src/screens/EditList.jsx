import { StyleSheet, View, Text, TextInput, Image, SafeAreaView, FlatList, StatusBar, Button, Alert} from "react-native"
import { useState, useContext } from "react"
import { useQuery } from "react-query"

import ListContext from '../context/newListContext'

import { getAllProducts } from "../firebase/productQueries"
import { editList } from "../firebase/listsQueries"

import ProductListModal from "../components/ProductListModal"
import ProductItem from "../components/ProductItem"
import Header from "../components/Header"

export default function EditList({ navigation }) {
  const {added, isOnList, listName} = useContext(ListContext)

  const [modalVisible, setModalVisible] = useState(false)

  const { isLoading, data } = useQuery("products", getAllProducts)

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false)
  }

  const saveList = async () => {
    await editList(
      listName,
      added
    )
    Alert.alert(`Lista ${listName} editada`)
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
        <Text>
          {listName}
        </Text>
        <Button title="Añadir Producto" onPress={openModal} />
        <ProductListModal
          visible={modalVisible}
          list={data}
          selected={isOnList}
          onClose={closeModal}
        />
        <FlatList
          style={styles.list}
          data={added}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProductItem 
              navigation={navigation} 
              info={item} 
              selected={true} 
            />
          )}
        />
        <Button 
          radius={"sm"} 
          type="solid" 
          title="Editar" 
          color="green"
          onPress={saveList}
        />
      </SafeAreaView>
    );
  };

  return (
    <>
      <Header title={"Kimchi's Purr-chases"} />
      <View style={styles.container}>
        { displayProducts() }
      </View>
    </>
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
    paddingBottom: 10
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
