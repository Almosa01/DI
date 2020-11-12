/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.mainColor}>
        <View style={{backgroundColor:'#02A7F0', height:96, color: 'white', fontWeight: 'bold', fontSize: 25, borderRadius:10,
          marginBottom:20, marginTop:20, marginLeft:30, marginRight:30 }}/>
        <View style={styles.body}>
          <View style={styles.ViewMain}>
            <View style={styles.ViewImage}>

            </View>
            <View style={styles.ViewTexto}>
            <Text>DDDD</Text>
            </View>
          </View>
          <View style={styles.ViewMain}>
            <View style={styles.ViewImage}>

            </View>
            <View style={styles.ViewTexto}>
            <Text>DDDD</Text>
            </View>
          </View>
          <View style={styles.ViewMain}>
            <View style={styles.ViewImage}>

            </View>
            <View style={styles.ViewTexto}>
            <Text>DDDD</Text>
            </View>
          </View>

        </View>
        <View style={styles.footer}>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainColor: {
    backgroundColor: 'gray', 
    height:'100%'
  },
  body:{
    backgroundColor:'#4990B0',
    height:445,
    borderRadius:10,
    marginLeft:10,
    marginBottom:10,
    marginRight:10
  }, 
  ViewMain: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#4990B0',
    height:147,
    color: 'white',
    fontSize:13,
  },
  footer: {
    backgroundColor:'#4990B0',
    height:80,
    borderRadius:10,
    marginLeft:10,
    marginBottom:10,
    marginRight:10
  },
  ViewTexto: {
    textAlign:"right",
    height:102,
    width:217,
    marginTop:19,
    marginRight:20,
    marginLeft:40,
    marginBottom:27,
    borderWidth:2,
    borderColor:'black'
    
  },
  ViewImage: {

    width:85,
    height:69,
    borderWidth:2,
    borderColor:'black',
    marginTop:32,
    marginLeft: 11,

  },
});

export default App;
