import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { QueryClient, QueryClientProvider } from "react-query"

import HomeScreen from './src/screens/Home'
import NewList from './src/screens/NewList'
import Products from './src/screens/Products'
import History from './src/screens/History'
import ProductList from './src/screens/ProductList'
import NewProduct from './src/screens/NewProduct'

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewList" component={NewList} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="NewProduct" component={NewProduct} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
