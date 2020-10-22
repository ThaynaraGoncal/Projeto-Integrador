import React, { useState } from 'react';
import {
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Alert,
} from "react-native";

import Button from '../../components/Button';
import InputText from '../../components/InputText';
import ImagePickerExample from '../../components/Camera';
import styles from './styles';

function Anuncio() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    function handleSubmit() {
        const data = {
            titulo,
            descricao,
            categoria,
        };

        api
            .post("/anuncios", data)
            .then((res) => {
                //console.log(res.data.msg)
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
                <Text style={styles.labelInput}>Descrição</Text>
                <InputText
                    value={descricao}
                    onChangeText={setDescricao}
                ></InputText>
                <Text style={styles.labelInput}>Categoria</Text>
                <TextInput
                    style={styles.textArea}
                    value={categoria}
                    onChangeText={setCategoria}
                />
                <Button titleButton="Continuar" onPress={handleSubmit}></Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Anuncio;