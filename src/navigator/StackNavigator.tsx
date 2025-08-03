import { createStackNavigator } from "@react-navigation/stack";
import { PantallaRegistro } from "../screens/PantallaRegistro";
import { PersonaInicio } from '../screens/PersonaInicio';
import { PantallaInicioSesion } from "../screens/PantallaInicio";

//Definir los screens parte de la navegacio y parametros
//Navegacion por propiedades de StackNavigator

export type RootStackParams = {
    Inicio: undefined,
    Registro: undefined,
    PersonaInicio: { nombre: string, apellido: string, edad: number, correo: string, contrasena: string }
}

const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Registro" component={PantallaRegistro} />
            <Stack.Screen name="Inicio" component={PantallaInicioSesion} />
            <Stack.Screen name="PersonaInicio" component={PersonaInicio} />
        </Stack.Navigator>
    );
};