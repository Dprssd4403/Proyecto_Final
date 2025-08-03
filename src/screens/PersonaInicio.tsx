import React, { useState } from "react";
import { Button, FlatList, Image, Text, View } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { styles } from "../theme/appTheme";

type Props = StackScreenProps<RootStackParams, "PersonaInicio">;

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
}


export const PersonaInicio = ({ route }: Props) => {
  const params = route.params;

  const producto:Producto =
    {
      id: 1,
      nombre: 'Logitech Wireless Mouse',
      descripcion: 'Mouse ergonómico inalámbrico para productividad',
      precio: 50.99,
      cantidad: 0,
    }
  ;
  const producto2:Producto =
    {
      id: 2,
      nombre: 'Ryzen Wireless KeyBoard',
      descripcion: 'Teclado mecánico inalámbrico con RGB',
      precio: 60.99,
      cantidad: 0,
    }
  ;

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>BIENVENIDO A ControlCrazePC</Text>
      <Text style={styles.title3}>{params.nombre} {params.apellido}</Text>
      <Text style={styles.title2}>Productos disponibles:</Text>
      <View style={styles.productCard}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{producto.nombre}</Text>
        <Text style={styles.productDesc}>{producto.descripcion}</Text>
        <Text style={styles.productPrecio}>{producto.precio}</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{producto2.nombre}</Text>
        <Text style={styles.productDesc}>{producto2.descripcion}</Text>
        <Text style={styles.productPrecio}>{producto2.precio}</Text>
      </View>

      </View>

      <Button title="Finalizar compra" onPress={() =>("")} />
    </View>
  );
};