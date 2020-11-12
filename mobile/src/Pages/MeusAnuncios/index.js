import React, { useState } from 'react';
import {
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Alert,
} from "react-native";

import api from '../../services/api';

import Button from '../../components/Button';
import InputText from '../../components/InputText';
import ImagePickerExample from '../../components/Camera';
import styles from './styles';

function MeusAnuncios() {

    function handleSubmit() {

        //setTitulo('teste')

        const data = {
            titulo,
            descricao,
            categoria,
        };
        console.log(data)
        api
            .post("/anuncios", data)
            .then((res) => {
                console.log(data)
                Alert.alert("Informação", res.data.msg);
                limpaCampos();
            })
            .catch((error) => {
                Alert.alert("Erro", "Houve um erro!");
                console.log(error);
            });
    }

    function limpaCampos() {
        setTitulo("");
        setDescricao("");
        setCategoria("");
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Text style={styles.title}>Meus Anúncios</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.labelInput}>Título</Text>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default MeusAnuncios;