import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


import Button from './src/components/Button';

export default function App() {


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>ShopTogether</Text>
        <Button title={ 'Nueva Lista' }/>
        <Button title={ 'Productos' } />
        <Button title={ 'Historial' } />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
});
