import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListsScreen from "../screens/Lists"
import NewListScreen from "../screens/NewList"
import MyListsScreen from "../screens/MyLists"
import OneList from "../screens/OneList"

const ListsStack = createNativeStackNavigator();

export default function ListsStackScreen() {
  return (
    <ListsStack.Navigator
      screenOptions={{ headerShown: false, statusBarColor: "black" }}
    >
      <ListsStack.Screen name="Cestas_Main" component={ListsScreen} />
      <ListsStack.Screen name="NewList" component={NewListScreen} />
      <ListsStack.Screen name="MyLists" component={MyListsScreen} />
      <ListsStack.Screen name="OneList" component={OneList} />
    </ListsStack.Navigator>
  );
}
