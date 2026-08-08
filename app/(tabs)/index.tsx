
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/Buttons';
import ImageViewer from '../../components/imageViewer';

const PlaceholderIamge = require('../../assets/images/background-image.png');

export default function IndexScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    }else{
      alert('You did not select any image.');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <ImageViewer imgSource={selectedImage || PlaceholderIamge} />
      </View>

      <View style={styles.footerContainer}>
          <Button 
            onPress={pickImageAsync}
            label = "Choose a photo."  
            theme = "primary"
            />

          <Button label = "Use this photo." />
      </View>
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
});