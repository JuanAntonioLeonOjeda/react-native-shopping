import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { QueryClient, QueryClientProvider } from "react-query"
import { Ionicons } from "@expo/vector-icons"

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
          <Tab.Navigator screenOptions={({route}) => ({ 
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline"
                } else if (route.name === "Productos") {
                  iconName = focused ? "fish" : "fish-outline"
                } else if (route.name === "Listas") {
                  iconName = focused ? "cart" : "cart-outline"
                }

                return <Ionicons name={iconName} size={size} color={color} />
              }
            })}>
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
