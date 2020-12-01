import React, { useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Textarea from 'react-native-textarea';

import Header from '../../../components/Header';
import api from '../../../services/api';

import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioAvaliacao() {
  const { params } = useRoute();
  const titulotRef = useRef();
  const textRef = useRef();

  const { goBack } = useNavigation();
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');
  const [gostei, setGostei] = useState(false);

  //console.log('meus params', params)

  async function handleAvaliar() {
    console.log('Inserir avaliacao')
    const dados = {
      id_anuncio: params[0].id,
      titulo: titulo,
      texto: text,
      like: gostei
    }

    const { data } = await api.post('/avaliar', dados);
    console.log(data.info);
    if (data.info) {
      createAlert(data.info);

    }

    if (data.msg) {
      //Alert.alert('Atenção!', data.msg);
      createAlertErro(data.msg);
    }


    // console.log('pessoa logada', params[0].cd_pessoa_fisica)
    // console.log('id_anuncio', params[0].id)
    // console.log('texto inserido', text)
    // console.log('gostei', gostei)
    setGostei(false)
  }

  const createAlertErro = (info) =>
    Alert.alert(
      "Atenção",
      info,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => titulotRef.current.focus() }
      ],
      { cancelable: false }
    );

  const createAlert = (info) =>
    Alert.alert(
      "Atenção",
      info,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            setTitulo('');
            setText('');
            setGostei(false);
            goBack();
          }
        }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Header title='Avaliação' buttonBack route='AnuncioDetalhes' />
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/* <KeyboardAvoidingView style={{ alignItems: 'center', backgroundColor: '#c7c7c7' }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        > */}
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '95%' }}>
          <Text style={styles.title}>Compartilhe com todos a sua opnião!</Text>
          <View style={styles.viewText}>
            <Text style={styles.anuncio}>{params[0].titulo}</Text>
            <Text>{params[0].categoria}</Text>
          </View>
          <Text style={styles.text}>Título*</Text>
          <TextInput
            ref={titulotRef}
            returnKeyType='done'
            keyboardType="default"
            // onSubmitEditing={() => setTimeout(() => textRef.current.focus(), 0)}
            style={styles.input}
            placeholder='clique para digitar'
            onChangeText={setTitulo}
            value={titulo}
          />
          <Text style={styles.text}>Descrição:</Text>
          <Textarea
            ref={textRef}
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={setText}
            defaultValue={text}
            maxLength={255}
            placeholder={'Conte-nos como foi a negociação...'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
          <View style={styles.viewButtons}>
            <TouchableOpacity style={gostei ? styles.buttonAvaliado : styles.buttonAvaliacao}
              onPress={() => setGostei(true)}
            >
              <Entypo name='thumbs-up' size={30} color={gostei ? '#fff' : color.AZUL_CIANETO} />
            </TouchableOpacity>
            <TouchableOpacity style={!gostei ? styles.buttonAvaliado : styles.buttonAvaliacao}
              onPress={() => setGostei(false)}
            >
              <Entypo name='thumbs-down' size={30} color={!gostei ? '#fff' : color.AZUL_CIANETO} />
            </TouchableOpacity>
          </View>
          <RectButton style={styles.button}
            onPress={handleAvaliar}
          >
            <Text style={styles.textButton}>Avaliar</Text>
          </RectButton>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
      </View>
    </View>
  )
};