import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Textarea from 'react-native-textarea';

import useAuth from '../../../hooks/useAuth';

import Header from '../../../components/Header';
import api from '../../../services/api';

import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioAvaliar() {
  const { user } = useAuth();

  const { params } = useRoute();
  const titulotRef = useRef();
  const textRef = useRef();

  const { goBack } = useNavigation();
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');
  const [gostei, setGostei] = useState(false);

  async function handleAvaliar() {
    const dados = {
      id_anuncio: params[0].id,
      cd_pessoa_avaliou: user.cd_pessoa_fisica,
      titulo: titulo,
      texto: text,
      like: gostei
    }

    const { data } = await api.post('/avaliar', dados);
    
    if (data.info) {
      createAlert(data.info);
    }

    if (data.msg) {
      createAlertErro(data.msg);
    }
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
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '95%' }}>
          <Text style={styles.title}>Compartilhe com todos a sua opnião!</Text>
          <View style={styles.viewAnuncio}>
            <View style={styles.headerAnuncio}>
              <Text style={styles.textAnuncio}>Anúncio</Text>
            </View>
            <View style={styles.viewText}>
              <View style={{ width: '50%', alignItems: 'center', height: 20, }}>
                <Text style={{ fontFamily: 'Nunito_600SemiBold', color: '#3A3E3B', fontSize: 14 }}>Título</Text>
                <Text style={styles.anuncio}>{params[0].titulo}</Text>
              </View>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Nunito_600SemiBold', color: '#3A3E3B', fontSize: 14 }}>Categoria</Text>
                <Text style={styles.anuncio}>{params[0].categoria}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.text}>Título*</Text>
          <TextInput
            ref={titulotRef}
            returnKeyType='done'
            keyboardType="default"
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
      </View>
    </View >
  )
};