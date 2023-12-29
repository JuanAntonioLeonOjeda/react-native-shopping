import { View, Text, StyleSheet, Alert } from "react-native"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"


import CustomModal from "./CustomModal";

export default function ListItem({ info }) {
  const [modalVisible, setModalVisible] = useState(false)

  const editProduct = () => {
    setModalVisible(true)
  }

  const cancelEdit = () => {
    setModalVisible(false)
  }

  const deleteProduct = () => {
    Alert.alert(`${info.name} eliminado`);
  }

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{info.name}</Text>
      <View style={styles.actions}>
        <Ionicons
          name="pencil"
          color="#2196f3"
          size={24}
          onPress={editProduct}
        />
        <CustomModal
          visible={modalVisible}
          defaultValue={info.name}
          onClose={cancelEdit}
        />
        <Ionicons name="trash" color="red" size={24} onPress={deleteProduct} />
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