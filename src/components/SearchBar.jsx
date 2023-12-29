import { TextInput, View, StyleSheet } from "react-native"
import { useState } from "react"

export default function SearchBar({query, onChange}) {

  return (
    <View style={styles.item}>
      <TextInput style={styles.text} placeholder="Buscar..." value={query} onChangeText={onChange} />
    </View>
  )
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
})