import { StyleSheet, Alert, Modal, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

export default function CustomModal ({ visible, defaultValue, onClose }) {
  const [text, setText] = useState(defaultValue);

  const saveChanges = () => {
    Alert.alert(`${defaultValue} editado`)
    onClose()
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
            <Button title="Guardar" onPress={saveChanges} />
            <Button title="Cancelar" onPress={onClose} color="red"/>
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
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  actions: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

