import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

 export default class Login extends Component{
    render(){
        
        return(
            <View style={styles.mainColor}>
            <View style={{backgroundColor:'#02A7F0', height:96, color: 'white', fontWeight: 'bold', fontSize: 25, borderRadius:10,
              marginBottom:20, marginTop:20, marginLeft:30, marginRight:30, justifyContent:'center', alignItems:'center'}}>
               <Text style={styles.Titulo}>PlaceMyBet</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.ViewMain}>
                    <View style={styles.ViewImage}>
                    <Image source={{ uri: 'https://simpleicon.com/wp-content/uploads/user1.png' }} style={{ width: 30, height: 30 }} />
                    </View>
                    <View style={styles.ViewTexto}>
                    <Text style={styles.Text}>Enter your email...</Text>
                    </View>
                </View>
                <View style={styles.ViewMain}>
                    <View style={styles.ViewImage}>
                    <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/104-512.png' }} style={{ width: 30, height: 30 }} />
                    </View>
                    <View style={styles.ViewTexto}>
                    <Text style={styles.Text}>Enter your password...</Text>
                    </View>
              </View>

            </View>
            <View style={{backgroundColor:'#4990B0',height:50,borderRadius:10,marginLeft:10,marginBottom:10,marginRight:10, justifyContent:'center', alignItems:'flex-end'}}>
              <Button title={'Login'} titleStyle={{color:'white', fontWeight:'bold'}} buttonStyle={{width:140, height:40, backgroundColor:'#2A9ACC', marginRight:120}}/>

            </View>
            <View style={{backgroundColor:'white',height:50,borderRadius:10,marginLeft:50,marginTop:20,marginRight:50, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.PieDePagina}>Don`t have an account sing up HERE</Text>
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
        height:245,
        borderRadius:10,
        marginLeft:10,
        marginBottom:10,
        marginRight:10
      }, 

      ViewTexto: {
        justifyContent:"center",
        height:40,
        width:275,
        marginTop:37,
        marginLeft:20,
        color: 'white',
        borderWidth:1,
        borderColor:'black'
        
      },
      ViewImage: {
    
        width:50,
        height:50,
        borderWidth:2,
        paddingLeft:8,
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

      },
      PieDePagina:{
        color:'#4990B0'
      },
      ViewMain: {
        flex:1,
        flexDirection:'row',
        backgroundColor: '#4990B0',
        height:147,
        color: 'white',
        fontSize:13,
      },


    });

