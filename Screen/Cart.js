import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Cart = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (route.params?.product && route.params?.quantity) {
      const { product, quantity } = route.params;
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [...prevCart, { ...product, quantity }];
      });
    }
  }, [route.params]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
    const differentProducts = cart.length;
    let discount = 0;

    if (totalProducts >= 3 && totalProducts <= 8) {
      discount = (totalProducts - 2) * 0.05;
    } else if (totalProducts > 8) {
      discount = 0.25;
    }

    const baseShipping = totalProducts * 50;
    const discountedShipping = baseShipping * (1 - discount);

    return discountedShipping;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemQuantity}>Cantidad: {item.quantity}</Text>
            <Text style={styles.cartItemPrice}>Subtotal: ${item.price * item.quantity}</Text>
          </View>
        )}
      />
      <View style={styles.totalsContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        <Text style={styles.shippingText}>Envío: ${calculateShipping()}</Text>
        <Text style={styles.grandTotalText}>Total Final: ${calculateTotal() + calculateShipping()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#eabcfd'
  },
  cartItem: {
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemQuantity: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  totalsContainer: {
    marginTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shippingText: {
    fontSize: 18,
  },
  grandTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Cart;
