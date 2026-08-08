
import { StyleSheet, View } from 'react-native';
import ImageViewer from '../../components/imageViewer';
import Button from '../../components/Buttons';

const PlaceholderIamge = require('../../assets/images/background-image.png');

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderIamge} />
      </View>

      <View style={styles.footerContainer}>
          <Button label = "Choose a photo."  theme = "primary"/>
          <Button label = "Use this photo."  theme = "primary"/>
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