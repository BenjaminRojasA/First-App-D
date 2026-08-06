import { Link, Stack } from 'expo-router';
import { LogBox, StyleSheet, Text, View } from 'react-native';

LogBox.ignoreAllLogs(true);

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <View style={styles.container}>
      <Text style={styles.textStyle} >Not Found Screen</Text>
      <Link href="/" style={styles.button}>
        Go back to Home screen!
      </Link>
    </View>
    </>
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