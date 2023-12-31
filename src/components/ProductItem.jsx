import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useContext } from "react"
import { Ionicons } from "@expo/vector-icons"

import ListContext from "../context/newListContext";

import QuantityModal from "./QuantityModal"

export default function ProductItem({ info, selected }) {
  const {addProduct} = useContext(ListContext)
  const [visible, setVisible] = useState(false)

  const openModal = () => {
    setVisible(true)
  };

  const closeModal = () => {
    setVisible(false)
  }

  const addToList = (qty, units) => {
    addProduct({
      name: info.name,
      qty,
      units
    })
    closeModal()
  }

  return (
    <View
      style={styles.item} 
      >
      <Text style={styles.text}>{info.name}</Text>
      <Ionicons
        name={selected ? "trash" : "add-circle-outline"}
        size={24}
        onPress={!selected ? openModal : () => addToList(info)}
        color={selected ? "red" : "#2196f3"}
      />
      <QuantityModal 
        visible={visible} 
        onClose={closeModal}
        addToList={addToList}
      />
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
    width: "90%",
    margin: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    flex: 1,
    fontSize: 20,
  }
});
