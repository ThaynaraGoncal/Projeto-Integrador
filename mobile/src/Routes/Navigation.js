import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Home from '../Routes/HomeStack';
import CadastroStack from '../Routes/CadastroStack';
import AnuncioStack from '../Routes/AnuncioStack';
import ContaStack from '../Routes/ContaStack';

import { ContextAuth } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';

import PayButton from '../components/PayButton';
import { RectButton } from 'react-native-gesture-handler';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Navigation() {
    const { logado } = useAuth();
    //const [component, setComponent] = useState(ContaStack);

    // useFocusEffect(() => {
    //     if (logado) {
    //         setComponent(ContaStack)
    //     } else {
    //         setComponent(CadastroStack)
    //     }
    // })


    return (
        <ContextAuth>
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
                            backgroundColor: '#f9fafc',
                            borderTopColor: '#dde3f0',
                        },
                        activeTintColor: '#8fa7b3',
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

                                    <AntDesign name='home' color={focused ? '#15c3d6' : color} size={size} />


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
                        name="ContaStack"
                        component={ContaStack}
                        options={{
                            tabBarLabel: 'Cadastro',
                            tabBarIcon: ({ color, size, focused }) => {
                                return (
                                    <AntDesign name='setting' color={focused ? '#15c3d6' : color} size={size} />
                                )
                            }
                        }}
                    />
                </Navigator>
            </NavigationContainer>
        </ContextAuth>
    );
}