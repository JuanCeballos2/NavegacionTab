// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa los iconos de MaterialIcons

// Importamos las pantallas desde la carpeta 'screens'
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';

// Creamos el BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Image') {
              iconName = 'image'; // Icono para la pantalla de imágenes
            } else if (route.name === 'Options') {
              iconName = 'settings'; // Icono para la pantalla de opciones
            } else if (route.name === 'Quiz') {
              iconName = 'question-answer'; // Icono para la pantalla de cuestionario
            }

            // Puedes devolver cualquier componente de icono aquí
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
