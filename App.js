import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { QueryClient, QueryClientProvider } from "react-query"
import { Ionicons } from "@expo/vector-icons"

import FishIcon from './assets/fish'
import FishIconOutline from './assets/fish-outline'

import HomeStackScreen from './src/router/HomeRouter'
import ProductsStackScreen from './src/router/ProductRouter'
import ListsStackScreen from './src/router/ListRouter'

import ListContext from "./src/context/newListContext";


const Tab = createBottomTabNavigator()
const queryClient = new QueryClient()

export default function App() {
  const [added, setAdded] = useState([]);

  const isOnList = (name) => {
    return added.find((product) => product.name === name);
  };

  const addProduct = (item) => {
    if (!isOnList(item.name)) {
      setAdded((prev) => [...prev, item]);
    } else {
      setAdded((prev) => prev.filter((i) => i.name !== item.name));
    }
  };
  return (
    <>
      <ListContext.Provider value={{ added, setAdded, addProduct, isOnList }}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "Productos") {
                    return focused ? (
                      <FishIcon width={size} height={size} fill={color} />
                    ) : (
                      <FishIconOutline
                        width={size}
                        height={size}
                        fill={color}
                      />
                    );
                  } else if (route.name === "Cestas") {
                    iconName = focused ? "cart" : "cart-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
            >
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen
                name="Productos"
                component={ProductsStackScreen}
                listeners={({ navigation }) => ({
                  tabPress: (e) => {
                    e.preventDefault();
                    navigation.navigate("Productos", {
                      screen: "Productos_Main",
                    });
                  },
                })}
              />
              <Tab.Screen
                name="Cestas"
                component={ListsStackScreen}
                listeners={({ navigation }) => ({
                  tabPress: (e) => {
                    e.preventDefault();
                    navigation.navigate("Cestas", { screen: "Cestas_Main" });
                  },
                })}
              />
            </Tab.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
      </ListContext.Provider>
    </>
  );
}
