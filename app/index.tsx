import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >Home Screen</Text>
      <Link href= {"/about"} style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f007a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 20,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});