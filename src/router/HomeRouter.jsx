import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/Home"
import ListsScreen from "../screens/Lists"
import ProductsScreen from "../screens/Products"

const HomeStack = createNativeStackNavigator()

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false, statusBarColor: 'black' }}>
      <HomeStack.Screen name="Home_Main" component={HomeScreen} />
      <HomeStack.Screen name="Home_Cestas" component={ListsScreen} />
      <HomeStack.Screen name="Home_Productos" component={ProductsScreen} />
    </HomeStack.Navigator>
  );
}