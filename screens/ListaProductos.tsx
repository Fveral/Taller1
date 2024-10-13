import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { productos } from './productos';

export default function ListaProductos() {
  const totalAPagar = productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.productPrice}>${item.precio.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total a Pagar: ${totalAPagar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 18,
    color: '#333',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
