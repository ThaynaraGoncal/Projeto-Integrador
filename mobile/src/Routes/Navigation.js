import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Anuncio from '../Pages/Anuncio';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';

import PayButton from '../components/PayButton';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        if (route.name === 'Anuncio') {
                            return (
                                <PayButton label="Anunciar" focused={focused} />
                            )
                        }
                    }
                })}
                tabBarOptions={{
                    style: {
                        backgroundColor: '#131418',
                        borderTopColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#92929c',
                }}
            >
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home"
                    }}
                />
                <Screen
                    name="Anuncio"
                    component={Anuncio}
                    options={{
                        tabBarLabel: ""
                    }}
                />
                <Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarLabel: 'Cadastro',
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                                <Ionicons name='ios-easel' color={focused ? '#fcbf49' : color} size={size} />
                            )
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}