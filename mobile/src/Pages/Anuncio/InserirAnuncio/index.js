import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
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
import * as color from '../../../Colors';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import ImagePickerExample from '../../../components/Camera';

import styles from './styles';

function Anuncio({ route, limpa }, params) {
  console.log('route', params);

  const { navigate } = useNavigation();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [images, setImages] = useState([]);



  useFocusEffect(() => {
    if (limpa) {
      setTitulo('');
      setDescricao('');
      setCategoria('');
      setValor('');
      setImages([]);
    }

  }, [])

  function validaCamposNull() {
    let validado = true;

    if (titulo == '' || descricao == '') {
      Alert.alert('Informação', 'Preencha todos os campos')
      validado = false;
    }

    setValor(valor.replace(',', '.'));
    console.log(valor);

    return validado;
  }

  async function handleSubmit() {
    // const dados = {
    //   titulo,
    //   descricao,
    //   categoria,
    //   valor,
    // };

    let validaCampos = validaCamposNull();

    const data = new FormData();

    data.append('titulo', titulo);
    data.append('descricao', descricao);
    data.append('categoria', categoria);
    data.append('valor', valor);

    images.forEach((image, index) => {
      data.append('file', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      })
    })

    console.log('Data formado:', data.values)

    if (validaCampos) {
      api.post('/anuncios', data);

      navigate('Home')
      // api.post("/anuncios", data)
      //   .then((res) => {
      //     console.log(data)
      //     Alert.alert(res.data.msg);
      //     limpaCampos();
      //     navigate('MeusAnuncios')
      //   })
      //   .catch((error) => {
      //     alert("Houve um erro!");
      //     console.log(error);
      //   });
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
      <Header title="Inserir Anúncio" />
      <KeyboardAvoidingView style={styles.box} behavior="padding" >
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
          >
            <Text style={styles.textButton}>{route.params ? route.params.name : 'Selecione uma categoria'}</Text>
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

export default Anuncio;