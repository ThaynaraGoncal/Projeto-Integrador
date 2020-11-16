import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import * as color from '../Colors';

import Home from '../Routes/HomeStack';
import CadastroStack from '../Routes/CadastroStack';
import AnuncioStack from '../Routes/AnuncioStack';

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
                        backgroundColor: color.PRETO_BACKGROUND,
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
                        tabBarLabel: "Anúncios",
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                            <AntDesign name='home' color={focused ? '#fcbf49' : color} size={size}/>
                            );
                        }
                    }}
                />
                <Screen
                    name="Anuncio"
                    component={AnuncioStack}
                    options={{
                        tabBarLabel: ""
                    }}
                />
                <Screen
                    name="Cadastro"
                    component={CadastroStack}
                    options={{
                        tabBarLabel: 'Cadastro',
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                                <AntDesign name='setting' color={focused ? '#fcbf49' : color} size={size} />
                            )
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}