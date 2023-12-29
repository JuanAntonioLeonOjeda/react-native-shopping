import { TextInput, View, StyleSheet, Text, Button, Alert } from "react-native"
import { useState } from "react"

import { addProduct } from "../firebase/productQueries"

export default function NewProduct() {
  const [ input, setInput ] = useState('')

  const handlePress = async () => {
    const obj = {
      name: input
    }
    await addProduct(obj)
    Alert.alert(`Producto ${input} añadido!`)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setInput} value={input} placeholder="Nombre" />
      <Button title={'Añadir'} onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    width: '100vw',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});