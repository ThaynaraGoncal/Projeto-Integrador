import React, { useReducer, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../../components/input';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

import api from '../../../services/api';

import styles from './styles';

function Cadastro() {
    const { navigate } = useNavigation();


    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validaCamposNull() {
        let validado = true;

        if (apelido == '' || email == '' || password == '') {
            Alert.alert('Informação', 'Preencha todos os campos')
            validado = false;
        }

        return validado;
    }

    function handleSubmit() {

        const data = {
            apelido, email, password
        }

        let validaCampos = validaCamposNull();

        if (validaCampos) {
            api.post(`/usuario`, data).then(res => {
                console.log(res.data)
                if (res.data.info) {
                    alert(res.data.info)
                } else {
                    //alert(res.data.sucess)
                    navigate("CadastroConcluido", res.data);
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Text style={styles.title}>Cadastro</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerInputs}>
                    <Text style={styles.labelInput}> Apelido</Text>
                    <InputText
                        onChangeText={setApelido} value={apelido}
                    />
                    <Text style={styles.labelInput}> E-mail</Text>
                    <InputText
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Text style={styles.labelInput}> Password</Text>
                    <InputText
                        onChangeText={setPassword}
                        value={password}
                    />
                    <Button
                        titleButton="Continuar"
                        onPress={handleSubmit}
                    >
                    </Button>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default Cadastro;