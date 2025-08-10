import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commons/constants';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
            cardStyle:{
                backgroundColor:PRIMARY_COLOR
            }
        }}>
      <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
    </Stack.Navigator>
  );
}