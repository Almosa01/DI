import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

 export default class TypeMarket extends Component{
    render(){
        
        return(
            <View style={styles.mainColor}>

            <View style={styles.body}>
              <View style={styles.ViewMain}>
                <View style={styles.ViewTexto2}>
                <Text style={styles.Titulo2}>Type Bet</Text>
                </View>
                <View style={styles.ViewTexto}>
                  <Text style={styles.Titulo}>Descripción...</Text>
                </View>
              </View>
              <View style={styles.ViewMain}>
                <View style={styles.ViewTexto2}>
                <Text style={styles.Titulo2}>Dear Result</Text>
                </View>
                <View style={styles.ViewTexto}>
                <Text style={styles.Titulo}>Descripción...</Text>
                </View>
              </View>
              <View style={styles.ViewMain}>
                <View style={styles.ViewTexto2}>
                <Text style={styles.Titulo2}>Quantity to Bet</Text>
                </View>
                <View style={styles.ViewTexto}>
                <Text style={styles.Titulo}>Descripción...</Text>
                </View>
              </View>
              <Button title={'Accept'} titleStyle={{color:'white', fontWeight:'bold'}} buttonStyle={{width:140, height:40, backgroundColor:'#2A9ACC', marginLeft:10,marginBottom:10}}/>
            </View>
            <View style={{backgroundColor:'#4990B0',height:80,borderRadius:10,marginLeft:10,marginBottom:10,marginRight:10, justifyContent:'center', alignItems:'flex-end'}}>
              <Button title={'Back to Main'} titleStyle={{color:'white', fontWeight:'bold'}} buttonStyle={{width:140, height:40, backgroundColor:'#2A9ACC', marginRight:20}}/>
            </View>
        </View>
      );
    };
 };
        
    const styles = StyleSheet.create({
      mainColor: {
        backgroundColor: 'gray', 
        height:'100%'
      },
      body:{
        backgroundColor:'#4990B0',
        height:610,
        borderRadius:10,
        marginLeft:10,
        marginBottom:10,
        marginRight:10
      }, 
      ViewMain: {
        flex:1,
        flexDirection:'column',
        backgroundColor: '#4990B0',
        height:147,
        color: 'white',
        fontSize:13,
      },
      ViewTexto: {
        justifyContent:"center",
        height:50,
        width:185,
        marginTop:12,
        marginRight:20,
        marginLeft:10,
        borderWidth:2,
        borderColor:'black'
        
      },
      Titulo:{
        color:'white',
        fontSize:16,
        alignContent:'center'

      },
      Titulo2:{
        color:'white',
        fontSize:24,
        alignContent:'center'

      },
      ViewTexto2: {
    
        width:185,
        height:69,
        borderWidth:2,
        paddingLeft:15,
        justifyContent:"center",
        borderColor:'black',
        marginTop:32,
        marginLeft: 11,
  
      },

    });

