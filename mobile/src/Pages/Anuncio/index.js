import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Alert,
} from "react-native";

import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/input';
import InputText from '../../components/InputText';
import ImagePickerExample from '../../components/Camera';
import styles from './styles';

function Anuncio() {
    const { navigate } = useNavigation();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState("");

    function validaCamposNull() {
        let validado = true;

        if (titulo == '' || descricao == '' || categoria == '') {
            Alert.alert('Informação', 'Preencha todos os campos')
            validado = false;
        }

        setValor(valor.replace(',', '.'));
        console.log(valor);

        return validado;
    }

    function handleSubmit() {
        const data = {
            titulo,
            descricao,
            categoria,
            valor,
        };
        console.log(data)

        let validaCampos = validaCamposNull();

        if (validaCampos) {
            api.post("/anuncios", data)
                .then((res) => {
                    console.log(data)
                    Alert.alert(res.data.msg);
                    limpaCampos();
                    navigate('MeusAnuncios')
                })
                .catch((error) => {
                    alert("Houve um erro!");
                    console.log(error);
                });
        }
    }

    function limpaCampos() {
        setTitulo("");
        setDescricao("");
        setCategoria("");
        setvalor("");
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Text style={styles.title}>Anúncio</Text>
            <ScrollView showsVerticalScrollIndicator="false">
                <ScrollView horizontal={true}>
                    <ImagePickerExample />
                    <ImagePickerExample />
                    <ImagePickerExample />
                    <ImagePickerExample />
                    <ImagePickerExample />
                    <ImagePickerExample />
                </ScrollView>
                <Text style={styles.labelInput}>Título</Text>
                <InputText
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Text style={styles.labelInput}>Categoria</Text>
                <InputText
                    value={categoria}
                    onChangeText={setCategoria}
                />
                <Text style={styles.labelInput}>Valor</Text>
                <InputText
                    value={valor}
                    onChangeText={setValor}
                    keyboardType='numeric'
                />
                <Text style={styles.labelInput}>Descrição</Text>
                <TextInput
                    style={styles.textArea}
                    value={descricao}
                    onChangeText={setDescricao}
                ></TextInput>
                <Button
                    titleButton="Continuar"
                    onPress={handleSubmit}
                >
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Anuncio;