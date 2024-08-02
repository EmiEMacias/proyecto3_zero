import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

import patoImage from '../image/pato.jpg';
import quirbyImage from '../image/quirby.jpg';
import rositaImage from '../image/rosita.jpg';
import harrypImage from '../image/Harryp.jpg';
import harrysImage from '../image/Harrys.jpg';

const products = [
  {
    id: '1',
    name: 'Pato',
    price: 200,
    description: 'Pato tejido artesanal de 20 cm',
    image: patoImage,
  },
  {
    id: '2',
    name: 'Qurby',
    price: 180,
    description: 'Qurby tejido artesanal de 20cm',
    image: quirbyImage,
  },
  {
    id: '3',
    name: 'Rosita Fresita',
    price: 600,
    description: 'Rosita fresita tejida artesanal de 40cm',
    image: rositaImage,
  },
  {
    id: '4',
    name: 'Harry Potter',
    price: 500,
    description: 'Harry Potter tejido artesanal de 35cm',
    image: harrypImage,
  },
  {
    id: '5',
    name: 'Harry Style',
    price: 800,
    description: 'Harry Style tejido artesanal de 45cm',
    image: harrysImage,
  },
];

const ProductList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Precio: ${item.price}</Text>
            <Button
              title="Ver Detalles"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    marginBottom: 16,
    backgroundColor: '#fab3f0',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 350,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProductList;
