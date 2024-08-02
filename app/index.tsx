import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../Screen/Productlist.js';
import ProductDetails from '../Screen/ProductDetails.js';
import Cart from '../Screen/Cart.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Lista de Productos' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Detalles del Producto' }} />
        <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito de Compras' }} />
      </Stack.Navigator>
  );
}
