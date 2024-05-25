

import { StyleSheet, View  } from 'react-native';
import StartGameScreen from '../screens/StartGameScreen';

export default function App() {

  return (
    <>
   <View>
    <StartGameScreen/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 5
  }
});
