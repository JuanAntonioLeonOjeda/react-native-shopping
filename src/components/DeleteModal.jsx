import {
  StyleSheet,
  Alert,
  Modal,
  View,
  Text,
  Button,
} from "react-native";

import { deleteProduct } from "../firebase/productQueries";
import { deleteList } from "../firebase/listsQueries";

export default function CustomModal({ visible, product, onClose, refetch, routeName }) {

  const confirmDelete = async () => {
    let result
    if (routeName === "ProductList") {
      result = await deleteProduct(product)
    } else {
      result = await deleteList(product);
    }
    if (result === 200) {
      Alert.alert(`${product} eliminado`)
    } else {
      Alert.alert(`Ha habido algún error`)
    }
    onClose()
    refetch()
  };

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
          <Text style={styles.modalText}>
            {`Eliminar ${product}?`}
          </Text>
          <View style={styles.actions}>
            <Button title="Eliminar" onPress={confirmDelete} color="red" />
            <Button title="Cancelar" onPress={onClose} />
          </View>
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
    width: "80%",
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
  modalText: {
    width: "80%",
    marginBottom: 15,
    textAlign: "center"
  },
  actions: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
