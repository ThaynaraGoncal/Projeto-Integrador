import React, { useReducer, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Input from '../../../components/input';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

import api from '../../../services/api';

import styles from './styles';

function MinhaConta() {
    const { navigate } = useNavigation();

    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        AsyncStorage.clear().then(() => {

        });
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Text style={styles.title}>Minha conta</Text>
            <Button onPress={handleSubmit}>
                <Text>Logout</Text>
            </Button>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerInputs}>
                    <Text style={styles.labelInput}>Minha conta logada</Text>
                    <InputText
                        onChangeText={setApelido} value={apelido}
                    />

                    {/* <Button
                        titleButton="Continuar"
                        onPress={handleSubmit}
                    >
                    </Button> */}
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default MinhaConta;