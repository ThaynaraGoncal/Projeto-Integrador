import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Alert,
    View
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import ImagePickerExample from '../../../components/Camera';

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

    function handleCategorias() {
        navigate('CategoriaAnuncio');
    }

    function limpaCampos() {
        setTitulo("");
        setDescricao("");
        setCategoria("");
        setvalor("");
    }

    return (
        <View style={styles.container}>
            <Header title="Inserir Anúncio" />
            <KeyboardAvoidingView style={styles.box} behavior="padding" >
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    <RectButton style={styles.button}
                        onPress={handleCategorias}
                    >
                        <Text style={styles.textButton}>Selecione uma categoria</Text>
                        <AntDesign name="arrowright" size={24} color="#c1bccc" />
                    </RectButton>
                    <Text style={styles.labelInput}>Valor</Text>
                    <InputText
                        value={valor}
                        onChangeText={setValor}
                        keyboardType='numeric'
                    >
                        <Text style={{ color: '#c1bccc' }}>R$: </Text>
                    </InputText>
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
            </KeyboardAvoidingView >
        </View>
    );
}

export default Anuncio;