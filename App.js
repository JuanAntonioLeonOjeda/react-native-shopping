import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { QueryClient, QueryClientProvider } from "react-query"

import HomeStackScreen from './src/router/HomeRouter'
import ProductsStackScreen from './src/router/ProductRouter'
import ListsStackScreen from './src/router/ListRouter'

const Tab = createBottomTabNavigator()

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen
              name="Productos"
              component={ProductsStackScreen}
              listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault()
                  navigation.navigate("Productos", { screen: "Productos_Main" });
                }})}
            />
            <Tab.Screen
              name="Listas"
              component={ListsStackScreen}
              listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault()
                  navigation.navigate("Listas", { screen: "Listas_Main" });
                }})}
            />
          </Tab.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}
