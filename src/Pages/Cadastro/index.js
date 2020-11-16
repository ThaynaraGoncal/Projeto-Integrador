import React, { useReducer, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/input';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

import api from '../../services/api';

import styles from './styles';

function Cadastro() {
    const { navigate } = useNavigation();


    const [nome, setNome] = useState('');
    const [cpf, setcpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dt_nascimento, setDtNascimento] = useState('');

    function validaCamposNull() {
        let validado = true;

        if (nome == '' || cpf == '' || dt_nascimento == '') {
            Alert.alert('Informação', 'Preencha todos os campos')
            validado = false;
        }

        return validado;
    }

    function handleSubmit() {

        const data = {
            nome, cpf, dt_nascimento, telefone, email
        }

        let validaCampos = validaCamposNull();

        if (validaCampos) {
            api.post(`/pessoa_fisica`, data).then(res => {
                //console.log(res.data)
                if (res.data.info) {
                    alert(res.data.info)
                } else {
                    //alert(res.data.sucess)
                    navigate("CadastroDetalhes", res.data);
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
                    <Text style={styles.labelInput}> Nome</Text>
                    <InputText
                        onChangeText={setNome} value={nome}
                    />
                    <Text style={styles.labelInput}> CPF</Text>
                    <Input type={'custom'}
                        options={{ mask: '999.999.999-99' }}
                        keyboardType='numeric'
                        onChangeText={setcpf} value={cpf}
                    />
                    <Text style={styles.labelInput}>Data de Nascimento</Text>
                    <Input type={'custom'}
                        options={{ mask: '99/99/9999' }}
                        keyboardType='numeric'
                        onChangeText={setDtNascimento}
                        value={dt_nascimento}
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