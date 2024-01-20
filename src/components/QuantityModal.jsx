import {
  StyleSheet,
  Modal,
  View,
  TextInput,
  Button,
  Text
} from "react-native";
import { useState } from "react";

export default function QuantityModal({
  product,
  visible,
  onClose,
  addToList
}) {
  const [input, setInput] = useState('1')
  const [units, setUnits] = useState('ud')

  const toggleUnits = (value) => {
    setUnits(value)
  }

  const addQuantity = () => {
    addToList(input, units)
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
          <Text style={styles.modalTitle}>{product}</Text>
          <TextInput
            style={styles.modalText}
            onChangeText={setInput}
            keyboardType="numeric"
            value={input}
            placeholder="Cantidad"
          />
          <View style={styles.units}>
            <Button
              style={styles.unitButton}
              title="ud"
              onPress={() => toggleUnits("ud")}
              color={units === "ud" ? "#2196f3" : "gray"}
            />
            <View style={{ height: 5 }} />
            <Button
              style={styles.unitButton}
              title="kg"
              onPress={() => toggleUnits("kg")}
              color={units === "kg" ? "#2196f3" : "gray"}
            />
          </View>
          <View style={styles.actions}>
            <Button 
              title="Cancelar" 
              onPress={onClose} 
            />
            <Button 
              title="Guardar" 
              color="green"
              onPress={addQuantity}
            />
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
  modalTitle: {
    fontSize: 25,
    marginBottom: 15
  },
  modalText: {
    width: "80%",
    marginBottom: 15,
    textAlign: "center",
    borderWidth: 1,
  },
  actions: {
    marginTop: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  units: {
    width: "30%",
    paddingVertical: 5
  },
  unitButton: {
    marginVertical: 2
  }
});
