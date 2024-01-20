import { StyleSheet, Alert, Modal, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

import { editProduct } from '../firebase/productQueries'

export default function CustomModal ({ visible, defaultValue, onClose, refetch }) {
  const [text, setText] = useState(defaultValue);

  const saveChanges = async () => {
    const result = await editProduct(defaultValue,text)
    if (result === 200) {
      Alert.alert(`${text} editado`)
    } else {
      Alert.alert(`Ha habido algún error`)
    }
    onClose()
    refetch()
  }

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
          <TextInput
            style={styles.modalText}
            onChangeText={setText}
            value={text}
          />
          <View style={styles.actions}>
            <Button title="Cancelar" onPress={onClose} />
            <Button title="Guardar" onPress={saveChanges} color="green" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

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
    textAlign: "center",
    borderWidth: 1
  },
  actions: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

