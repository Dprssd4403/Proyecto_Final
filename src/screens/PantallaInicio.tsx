import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import { RootStackParams } from "../navigator/StackNavigator";
import { styles } from "../theme/appTheme";

//Navegacion por propiedades de StackNavigator
//interface para las propiedades de navegacion
type Props = StackScreenProps<RootStackParams, "Inicio">;

interface Persona {
  nombre: string;
  apellido: string;
  edad: 22;
  correo: string;
  contrasena: string;
}

const persona: Persona = {
  nombre: "Christopher",
  apellido: "Espinosa",
  edad: 22,
  correo: "christophervivanco2123@gmail.com",
  contrasena: "itsqmet12",
};

export const PantallaInicioSesion = ({ navigation }: Props) => {
  const [correo, onChangeCorreo] = React.useState("");
  const [contrasena, onChangeContrasena] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INICIAR SESIÓN</Text>
      <TextInput
         style={styles.textInput}
    onChangeText={onChangeCorreo}
    placeholder="Correo electrónico"
    keyboardType="email-address"
    value={correo}
    autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeContrasena}
        value={contrasena}
        placeholder="Contraseña"
        secureTextEntry
        keyboardType="default"
      />
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate("PersonaInicio", persona)}
      />
        <TouchableOpacity style={styles.buttomA} onPress={() => navigation.navigate("Registro")}>
          <Text>¿No puede iniciar sesión?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttomRegis} onPress={() => navigation.navigate("Registro")}>
          <Text>Registrarse</Text>
        </TouchableOpacity>
    </View>
  );
};