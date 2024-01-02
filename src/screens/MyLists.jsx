import { StyleSheet, View, Text, StatusBar, Image, SafeAreaView, FlatList } from "react-native"
import { useState } from "react"
import { useQuery } from "react-query"

import { getAllLists } from "../firebase/listsQueries"

import ListItem from "../components/ListItem"
import SearchBar from "../components/SearchBar"
import Header from "../components/Header"

export default function MyLists({ navigation }) {
  const { isLoading, data, refetch } = useQuery("lists", getAllLists)
  const [searchQuery, setSearchQuery] = useState("");


  const filterLists = data?.filter((list) => {
    return list.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const displayLists = () => {
    if (isLoading) {
      return (
        <>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/loading.png")}
          />
          <Text>Cargando...</Text>
        </>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <FlatList
          style={styles.list}
          data={filterLists}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <ListItem info={item} refetch={refetch} navigation={navigation} />}
        />
      </SafeAreaView>
    );
  }

  return (
    <>
      <Header title={"Kimchi's Purr-chases"} />
      <View style={styles.container}>
        { displayLists() }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  list: {
    width: "100%",
  },
  tinyLogo: {
    width: "100%",
    height: "60%",
  },
});
