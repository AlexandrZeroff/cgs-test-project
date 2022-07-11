import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeScreen from './src/screens/HomeScreen';
import { createTodo, editTodo, home } from './src/config/ROUTER_KEYS';
import CreateTodoScreen from './src/screens/CreateTodoScreen';



const Stack = createStackNavigator()

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name={home} component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name={createTodo} component={CreateTodoScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  )
}


