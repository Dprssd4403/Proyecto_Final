//Navegacion por propiedades de StackNavigator

import { Button, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../theme/appTheme";

//interface para las propiedades de navegacion
type Props = StackScreenProps<RootStackParams, "Registro">;

export const PantallaRegistro = ({ navigation }: Props) => {
  const [nombre, onChangeNombre] = React.useState("");
  const [apellido, onChangeApellido] = React.useState("");
  const [edad, onChangeEdad] = React.useState("");
  const [correo, onChangeCorreo] = React.useState("");
  const [contrasena, onChangeContrasena] = React.useState("");
  interface Persona {
    nombre: string;
    apellido: string;
    correo: string;
    edad: number;
    contrasena: string;
  }

  const persona: Persona = {
    nombre: "Christopher",
    apellido: "Espinosa",
    correo: "christophervivanco2123@gmail.com",
    edad: 22,
    contrasena: "itsqmet12",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNombre}
        placeholder="Nombre"
        keyboardType="default"
        value={nombre}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeApellido}
        value={apellido}
        placeholder="Apellido"
        keyboardType="default"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEdad}
        value={edad}
        placeholder="Edad"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeCorreo}
        placeholder="Correo electronico"
        keyboardType="email-address"
        value={correo}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeContrasena}
        value={contrasena}
        placeholder="Contraseña"
        keyboardType="default"
      />
      <Button title="Registrarse" onPress={() => navigation.popToTop()} />
    </View>
  );
};