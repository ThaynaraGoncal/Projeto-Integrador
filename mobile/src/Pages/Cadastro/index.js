import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';

import PayButton from '../../components/PayButton';
import Input from '../../components/input';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

import api from '../../services/api';

import styles from './styles';

function Cadastro() {
    const [name, setName] = useState('');
    const [cpf, setcpf] = useState('');
    const [dt_nascimento, setDtNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {

        const data = {
            name, cpf, dt_nascimento, telefone, email, password
        }

        api.post('/users', data).then(res => {
            //console.log(res.data.msg)
            Alert.alert('Informação', res.data.msg)
        }).catch(error => {
            Alert.alert('Erro', 'Houve um erro!')
            console.log(error)
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Text style={styles.title}>Cadastro</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <View style={styles.containerInputs}>
                    <Text style={styles.labelInput}> Nome</Text>
                    <InputText />
                    <Text style={styles.labelInput}> CPF</Text>
                    <Input type={'custom'}
                        options={{ mask: '999.999.999-99' }}
                        keyboardType='numeric'
                        onChangeText={setcpf} value={cpf}
                    />
                    <Text style={styles.labelInput}> Data de Nascimento</Text>
                    <Input type={'custom'}
                        options={{ mask: '99/99/9999' }}
                        keyboardType='numeric'
                        onChangeText={setDtNascimento} value={dt_nascimento}
                    />
                    <Text style={styles.labelInput}> Telefone</Text>
                    <Input
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        keyboardType='numeric'
                        onChangeText={setTelefone}
                        value={telefone}
                    />
                    <Text style={styles.labelInput}> E-mail</Text>
                    <InputText
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Text style={styles.labelInput}> Escolha uma senha</Text>
                    <InputText
                        onChangeText={setPassword}
                        value={password}
                    />
                    <Button
                        titleButton="Concluir"
                        onPress={handleSubmit}
                    >
                        <Text style={styles.contactButtonText}>Continuar</Text>
                    </Button>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default Cadastro;