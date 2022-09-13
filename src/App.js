import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, AthleteList, Planning, References } from './components/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Athletes' component={AthleteList}></Stack.Screen>
        <Stack.Screen name='Planning' component={Planning}></Stack.Screen>
        <Stack.Screen name='References' component={References}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};
