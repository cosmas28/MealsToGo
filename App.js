import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}><Text>Search</Text></View>
      <View style={styles.mainContainer}><Text>Main</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: 'green',
    width: '100%',
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
    width: '100%',
    padding: 10
  }
});
