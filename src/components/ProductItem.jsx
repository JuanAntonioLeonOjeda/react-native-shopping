import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useContext } from "react"
import { Ionicons } from "@expo/vector-icons"

import ListContext from "../context/newListContext";

import QuantityModal from "./QuantityModal"

export default function ProductItem({ navigation, info, selected, addToCart }) {
  const routeName =
    navigation?.getState().routes[navigation?.getState().index].name;
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
    <View style={styles.item}>
      <Text style={styles.text}>{info.name}</Text>
      <Text style={styles.text}>
        {info.qty} {info.units}
      </Text>
      {routeName === "OneList" ? (
        <Ionicons
          name={selected ? "checkmark-outline" : "add-circle-outline"}
          size={24}
          color={selected ? "green" : "#2196f3"}
          onPress={() => addToCart(info.name)}
        />
      ) : (
        <Ionicons
          name={selected ? "trash" : "add-circle-outline"}
          size={24}
          onPress={!selected ? openModal : () => addToList(info)}
          color={selected ? "red" : "#2196f3"}
        />
      )}
      <QuantityModal
        product={info.name}
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
