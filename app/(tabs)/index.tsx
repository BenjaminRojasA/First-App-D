
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '@/components/Buttons';
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/imageViewer';

const PlaceholderIamge = require('../../assets/images/background-image.png');

export default function IndexScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    }else{
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    //setSelectedImage(undefined);
    setShowAppOptions(false);
  }
  const onAddSticker = () => {
    //console.log('Add sticker');
  }
  const onSaveImageAsync = async () => {
    //console.log('Save image');
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <ImageViewer imgSource={selectedImage || PlaceholderIamge} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon = "refresh" label = "Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon = "save-alt" label = "Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
          <View style={styles.footerContainer}>
            <Button label = "Choose a photo." onPress={pickImageAsync}   theme = "primary"/>
            <Button label = "Use this photo." onPress={() => setShowAppOptions(true)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f007a',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});