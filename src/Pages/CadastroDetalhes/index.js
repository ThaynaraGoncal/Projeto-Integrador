import React, { useState } from 'react';
import { Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import InputText from '../../components/InputText';
import Button from '../../components/Button';
import api from '../../services/api';

import styles from './styles';

function CadastroDetalhes() {
    const [password, setPassword] = useState('');

    const { navigate } = useNavigation();

    const route = useRoute();
    //console.log('recebendo detalhes', route.params)
    let { cd_pessoa_fisica } = route.params;


    function handleSubmit() {

        const data = {
            cd_pessoa_fisica, password
        }
        api.post('/usuario', data).then(res => {
            //console.log(res.data)
            navigate("CadastroConcluido", res.data);
        }).catch(error => {
            alert('Houve um erro!')
            console.log(error)
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Text style={styles.title}>Cadastro</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.labelInput}> Escolha uma senha</Text>
                <InputText
                    onChangeText={setPassword}
                    value={password}
                />
                <Button
                    titleButton="Concluir"
                    onPress={handleSubmit}
                >
                </Button>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default CadastroDetalhes;