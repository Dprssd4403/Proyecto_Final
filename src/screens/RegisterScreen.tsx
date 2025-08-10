import React, { useState } from "react";
import { Alert, StatusBar, Text, View } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";

import { BodyComponent } from "../components/BodyComponent";
import { styles } from "../theme/appTheme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { TitleComponent } from "../components/TittleComponent";

interface FormRegister {
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}

export const RegisterScreen = () => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //funcion para modificar el estado del formulario
  const changeForm = (property: string, value: string): void => {
    // console.log(property + ": " + value);
    setFormRegister({ ...formRegister, [property]: value });
  };

  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const users: User[] = [
    { id: 1, name: "Christopher", lastname: "Espinosa", email: "christophervivanco2123@gmail.com", username: "Dprssd", password: "1727053231" },
    { id: 2, name: "Yessica", lastname: "Gamez", email: "yessicaGamez12@gmail.com", username: "Kingdome", password: "654321" },
  ];
  const verifyUser = (): boolean => {
    return users.some(
      user =>
        user.name == formRegister.name &&
        user.lastname == formRegister.lastname &&
        user.email == formRegister.email &&
        user.username == formRegister.username &&
        user.password == formRegister.password
    );
  };
  //funcion permitir registro
  const handleRegister = (): void => {
    if (formRegister.name == "" || formRegister.lastname == "" || formRegister.email == "" || formRegister.username == "" || formRegister.password == "") {
      Alert.alert("Error", "Por favor, complete todos los campos");
      return; //si falta algun campo, nos saca del flujo
    }
    if (verifyUser()) {
      Alert.alert("Error", "No se puede crear el usuario");
      return;
    }
    Alert.alert("Éxito", "Usuario creado correctamente");
    console.log("Usuario registrado:", formRegister);
  };
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Registrate" />
      <BodyComponent>
        <Text style={styles.titleWelcome}>Listo para transformar tu mundo digital</Text>
        <Text style={styles.textDescription}>
          Innovación que transforma tu mundo digital
        </Text>
        <View style={styles.containerForm}>
          <InputComponent
            placeholder="Nombre"
            keyboardType="default"
            changeForm={changeForm}
            property="name"
          />
          <InputComponent
            placeholder="Apellido"
            keyboardType="default"
            changeForm={changeForm}
            property="lastname"
          />
          <InputComponent
            placeholder="Correo electronico"
            keyboardType="default"
            changeForm={changeForm}
            property="email"
          />
          <InputComponent
            placeholder="Usuario"
            keyboardType="default"
            changeForm={changeForm}
            property="username"
          />
          <InputComponent
            placeholder="Contraseña"
            keyboardType="default"
            changeForm={changeForm}
            property="password"
            isPassword={hiddenPassword}
          />
          <Icon
            name={hiddenPassword ? "visibility" : "visibility-off"}
            size={20}
            color={PRIMARY_COLOR}
            style={styles.iconForm}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        </View>
        <ButtonComponent textButton="Registrarse" handleLogin={handleRegister}/>
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Login" }))
          }
        >
          <Text style={styles.textRedirect}>
            Ya tienes una cuenta? Inicia sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  );

};