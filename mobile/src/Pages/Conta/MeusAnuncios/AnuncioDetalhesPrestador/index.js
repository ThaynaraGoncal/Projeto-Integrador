import React from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import Header from '../../../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../../../services/api';
import styles from './styles';

export default function AnuncioDetalhesPrestador({ route }) {
  const { navigate } = useNavigation();
  const imagens = route.params.path;

  const { categoria, descricao, valor, titulo, cd_pessoa_fisica, id } = route.params;

  let data = {}

  async function deleteAnuncio() {
    api.delete(`/anuncio?cd_pessoa_fisica=${cd_pessoa_fisica}&id_anuncio=${id}`)
      .then((res) => {
        if (res.data?.anuncios) {
          data = res.data.anuncios;
        }
        data = {
          data,
          origin: 'delete'
        }
        createAlert(res.data.info, data)
      }).catch((error) => {
        console.log(error)
      });
  }

  const createAlert = (info, data) =>
    Alert.alert(
      "Informação",
      info,
      [
        {
          text: "OK", onPress: () => {
            navigate('MeusAnuncios', data);
          }
        }
      ],
      { cancelable: false }
    );

  function handleEditar() {

    navigate('EditarAnuncio', route.params)
  }

  return (
    <View style={styles.container}>
      <Header title="Detalhes Anúncio" buttonBack route="MeusAnuncios" />
      <View style={styles.viewButtons}>
        {/* <RectButton style={styles.button}
          onPress={handleEditar}
        >
          <Text>Editar</Text>
        </RectButton> */}
        <RectButton style={styles.button}
          onPress={deleteAnuncio}
        >
          <Text style={styles.textButtonExluir}>Excluir</Text>

        </RectButton>
      </View>
      <ScrollView>
        <ScrollView horizontal={true} style={styles.viewImages}>
          {imagens.map((item) => {
            return (
              <Image source={{ uri: item }} style={styles.image} key={item} />
            )
          })}
        </ScrollView>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.labelValor}>R$ {valor}</Text>
        <View style={styles.line} />
        <Text style={styles.labelTitulo}>Descrição</Text>
        <Text style={styles.labelText}>{descricao}</Text>
        <View style={styles.line} />
        <Text style={styles.labelTitulo}>Detalhes</Text>
        <View style={styles.viewInfo}>
          <Text style={styles.tituloCategoria}>Categoria</Text>
          <Text style={styles.labelCategoria}>{categoria}</Text>
        </View>
        <View style={styles.line} />
      </ScrollView>
    </View>
  );
};