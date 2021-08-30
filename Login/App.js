import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Discount UltraBlaster</Text>

      <TextInput style={styles.input} placeholder="Enter your email" />
      <TextInput style={styles.input} placeholder="Type your password" />

      <Button title= "Verify" />

      <Text style={styles.status}>...</Text>

      <View style={styles.cupomArea}>
        <Text style={styles.cupomTitle}>Coupon Code:</Text>
        <Text style={styles.cupomCode}>GFDJGF529</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#333',
    padding: 20,
    marginLeft: 15
  },
  header:{
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30
  },
  input:{
    height: 45,
    fontSize: 18,
    color: '#FFF',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  status:{},
  cupomArea:{},
  cupomTitle:{},
  cupomCode:{}
  
});

export default App;