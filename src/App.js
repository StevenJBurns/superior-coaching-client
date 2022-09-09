import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Home, About, Athletes, References } from './components/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='About' component={About}></Stack.Screen>
          <Stack.Screen name='Athletes' component={Athletes}></Stack.Screen>
          <Stack.Screen name='References' component={References}></Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'gold',
  }
});
