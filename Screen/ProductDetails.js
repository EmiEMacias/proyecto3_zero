import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
    console.log(`Producto agregado: ${product.name}, Cantidad: ${quantity}`);
    navigation.navigate('Cart', { product, quantity });
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Precio: ${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <TextInput
        style={styles.quantityInput}
        keyboardType="numeric"
        value={quantity.toString()}
        onChangeText={(text) => setQuantity(parseInt(text) || 1)}
      />
      <Button title="Agregar al Carrito" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor:'#e6b3fa'
  },
  productImage: {
    width: '100%',
    height: 350,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderColor: '#050505',
    borderWidth: 1,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default ProductDetails;
