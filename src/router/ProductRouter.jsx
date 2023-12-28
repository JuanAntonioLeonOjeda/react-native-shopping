import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "../screens/Products"
import NewProductScreen from '../screens/NewProduct'
import ProductListScreen from '../screens/ProductList'

const ProductsStack = createNativeStackNavigator();

export default function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductsStack.Screen name="Productos_Main" component={ProductsScreen} />
      <ProductsStack.Screen name="NewProduct" component={NewProductScreen} />
      <ProductsStack.Screen name="ProductList" component={ProductListScreen} />
    </ProductsStack.Navigator>
  );
}
