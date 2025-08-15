import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commons/constants';
import { LoginScreen } from '../screens/LoginScreen';

import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { useState } from 'react';
import { RegisterScreen } from '../screens/RegisterScreen';

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {

  const users: User[] = [
    {
      id: 1,
      name: "Christopher Espinosa",
      username: "dprssd",
      password: "123456",
    },
    {
      id: 2,
      name: "Yessica Gamez",
      username: "kingdome",
      password: "654321",
    },
  ];
  const [listUsers, setListUsers] = useState<User[]>(users);

  const addUser = (user: User) => {
    //modificar el estado del arreglo
    setListUsers([...listUsers, user]);
  };

  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: PRIMARY_COLOR
      }
    }}>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        children={() => <LoginScreen users={listUsers} />}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        children={() => <RegisterScreen users={listUsers} addUser={addUser} />}
      />
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
    </Stack.Navigator>
  );
}