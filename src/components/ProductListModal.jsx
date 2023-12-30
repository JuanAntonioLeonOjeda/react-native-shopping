import {
  StyleSheet,
  Alert,
  Modal,
  View,
  TextInput,
  Button,
  FlatList,
  Text
} from "react-native";
import { useState } from "react"

import SearchBar from "./SearchBar"
import ProductItem from "./ProductItem";

export default function ProductListModal({
  visible,
  list,
  setList,
  onClose,
}) {
  const [searchQuery, setSearchQuery] = useState("")

  const addProduct = (item) => {
    setList((prev) => ([...prev, item]))
  }

  const filterProducts = list?.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <Modal
      style={styles.container}
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Button title="cerrar" onPress={onClose} color="red" />
          <SearchBar query={searchQuery} onChange={setSearchQuery} />
          <FlatList
            style={styles.list}
            data={filterProducts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <ProductItem info={item} add={addProduct}/>}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "90%",
    borderWidth: 2,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  list: {
    width: "100%"
  }
});
