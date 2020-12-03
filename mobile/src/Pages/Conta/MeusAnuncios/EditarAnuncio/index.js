import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as color from '../../../../Colors';

import api from '../../../../services/api';

import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import InputText from '../../../../components/InputText';

import styles from './styles';

export default function EditarAnuncio({ route }) {
  const { params } = useRoute();
  console.log(route.params)

  const { navigate } = useNavigation();

  const [cd_pessoa, setCd_pessoa] = useState('');
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [images, setImages] = useState([]);

  let usuario = {};

  useFocusEffect(() => {
    console.log('parametros para editar', params)
    setTitulo(params.titulo);
    setDescricao(params.descricao);
    setCategoria(params.categoria);
    setValor(params.valor);
    setImages(params.path)
  }, [])

  function validaCamposNull() {
    let validado = true;

    if (titulo == '' || descricao == '') {
      Alert.alert('Informação', 'Preencha todos os campos')
      validado = false;
    }

    setValor(valor.replace(',', '.'));

    return validado;
  }

  async function handleSubmit() {

    let validaCampos = validaCamposNull();

    const data = new FormData();

    setCategoria(route.params.name)

    data.append('titulo', titulo);
    data.append('descricao', descricao);
    data.append('categoria', categoria);
    data.append('valor', valor);
    data.append('cd_pessoa_fisica', cd_pessoa);

    images.forEach((image, index) => {
      data.append('file', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      })
    })

    const createAlert = (info) =>
      Alert.alert(
        "Informação",
        info,
        [
          { text: "OK", onPress: () => navigate('MinhaConta') }
        ],
        { cancelable: false }
      )

    if (validaCampos) {
      api.post('/anuncios', data).then((res) => {
        console.log(res.data.info);
        createAlert(res.data.info)
      }).catch((error) => {

      });

      limpaCampos();
      navigate('MinhaConta')
    }
  }

  function handleCategorias() {
    navigate('CategoriaAnuncio', { rota: 'EditarAnuncio' });
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status != 'granted') {
      alert('Eita, precisamos de acesso ás suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  }

  return (
    <View style={styles.container}>
      <Header title="Editar Anúncio" buttonBack route='AnuncioDetalhesPrestador' />
      <KeyboardAvoidingView style={styles.box}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.labelInput}>Selecione as imagens</Text>

          <ScrollView horizontal={true} style={styles.ViewImages}>
            {images.map(image => {
              return (
                <Image
                  key={image}
                  source={{ uri: image }}
                  style={styles.uploadImage}
                />
              );
            })}

            <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
              <Feather name="plus" size={24} color={color.BUTTON_IMAGES} />
            </TouchableOpacity>
          </ScrollView>

          <Text style={styles.labelInput}>Título</Text>
          <InputText
            value={titulo}
            onChangeText={setTitulo}
          />
          <Text style={styles.labelInput}>Categoria</Text>
          <RectButton style={styles.button}
            onPress={handleCategorias}
            value={categoria}
            onChangeText={setCategoria}
          >
            <Text style={styles.textButton}>{params ? params.categoria : 'Selecione uma categoria'}</Text>
            <AntDesign name="arrowright" size={24} color="#c1bccc" />
          </RectButton>
          <Text style={styles.labelInput}>Valor</Text>
          <InputText
            value={valor}
            onChangeText={setValor}
            keyboardType='numeric'
          >
          </InputText>
          <Text style={styles.labelInput}>Descrição</Text>
          <TextInput
            style={styles.textArea}
            value={descricao}
            onChangeText={setDescricao}
            multiline
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