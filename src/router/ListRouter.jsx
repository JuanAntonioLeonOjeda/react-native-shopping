import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListsScreen from "../screens/NewList"

const ListsStack = createNativeStackNavigator();

export default function ListsStackScreen() {
  return (
    <ListsStack.Navigator screenOptions={{ headerShown: false }}>
      <ListsStack.Screen name="Listas_Main" component={ListsScreen} />
    </ListsStack.Navigator>
  );
}
