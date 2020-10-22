import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos de permissões de rolo da câmera para fazer isso funcionar!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.camera}>
      <Button onPress={pickImage} title="Camera" />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}