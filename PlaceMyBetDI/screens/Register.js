import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

 export default class Register extends Component{
    render(){
        
        return(
            <View style={styles.mainColor}>
            <View style={{backgroundColor:'#02A7F0', height:96, color: 'white', fontWeight: 'bold', fontSize: 25, borderRadius:10,
              marginBottom:20, marginTop:20, marginLeft:30, marginRight:30, justifyContent:'center', alignItems:'center'}}>
               <Text style={styles.Titulo}>WELCOME</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.ViewTexto}>
                  <Text style={styles.Text}>Enter your name...</Text>
              </View>
                <View style={styles.ViewTexto}>
                  <Text style={styles.Text}>Enter your surname...</Text>
              </View>
                <View style={styles.ViewTexto}>
                  <Text style={styles.Text}>Enter your email...</Text>
              </View>
              <View style={styles.ViewTexto}>
                  <Text style={styles.Text}>Enter your password...</Text>
              </View>
              <View style={styles.ViewTexto}>
                  <Text style={styles.Text}>Confirm your password...</Text>
              </View>
              <View style={styles.ViewTexto}>
                  <Text style={styles.Text}>Enter your num card...</Text>
              </View>
            </View>
            <View style={{backgroundColor:'#4990B0',height:80,borderRadius:10,marginLeft:10,marginBottom:10,marginRight:10, justifyContent:'center', alignItems:'flex-end'}}>
              <Button title={'Continue'} titleStyle={{color:'white', fontWeight:'bold'}} buttonStyle={{width:140, height:40, backgroundColor:'#2A9ACC', marginRight:120}}/>
              <Button title={'Back'} titleStyle={{color:'white', fontWeight:'bold'}} buttonStyle={{width:140, height:40, backgroundColor:'#2A9ACC', marginRight:120}}/>
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
        height:445,
        borderRadius:10,
        marginLeft:10,
        marginBottom:10,
        marginRight:10
      }, 

      ViewTexto: {
        justifyContent:"center",
        height:40,
        width:300,
        marginTop:19,
        marginLeft:20,
        color: 'white',
        borderWidth:1,
        borderColor:'black'
        
      },
      ViewImage: {
    
        width:85,
        height:69,
        borderWidth:2,
        paddingLeft:15,
        justifyContent:"center",
        borderColor:'black',
        marginTop:32,
        marginLeft: 11,
    
      },
      Text: {
        color:'white'
      },
      Titulo:{
        color:'white',
        fontSize:32,

      }


    });

