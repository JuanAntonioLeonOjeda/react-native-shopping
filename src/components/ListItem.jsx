import { View, Text, StyleSheet, Alert } from "react-native"
import { useState, useContext } from "react"
import { Ionicons } from "@expo/vector-icons"

import ListContext from "../context/newListContext"

import CustomModal from "./CustomModal"
import DeleteModal from './DeleteModal'

export default function ListItem({ info, refetch, navigation }) {
  const routeName = navigation.getState().routes[navigation.getState().index].name

  const { addProduct } = useContext(ListContext)

  const [modalVisible, setModalVisible] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const editProduct = () => {
    setModalVisible(true)
  }

  const cancelEdit = () => {
    setModalVisible(false)
  }

  const deleteElement = () => {
    setDeleteModalVisible(true)
  }

  const cancelDelete = () => {
    setDeleteModalVisible(false)
  }

  const copyList = () => {
    addProduct(...info.products)
    navigation.navigate("NewList")
  }

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{info.name}</Text>
      <View style={styles.actions}>
        <Ionicons
          name={routeName === "ProductList" ? "pencil" : "copy-outline"}
          color="#2196f3"
          size={24}
          onPress={routeName === "ProductList" ? editProduct : copyList}
        />
        <CustomModal
          visible={modalVisible}
          defaultValue={info.name}
          onClose={cancelEdit}
          refetch={refetch}
          routeName={routeName}
        />
        <DeleteModal
          visible={deleteModalVisible}
          product={info.name}
          onClose={cancelDelete}
          refetch={refetch}
          routeName={routeName}
        />
        <Ionicons name="trash" color="red" size={24} onPress={deleteElement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "80%",
    margin: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
    alignItems: "center"
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
  actions: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between"
  }
});