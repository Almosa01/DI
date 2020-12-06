import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

 export default class Main extends Component{
    render(){
        
        return(
            <View style={styles.mainColor}>
            <View style={{backgroundColor:'#02A7F0', height:96, color: 'white', fontWeight: 'bold', fontSize: 25, borderRadius:10,
              marginBottom:20, marginTop:20, marginLeft:30, marginRight:30, justifyContent:'center', alignItems:'center'}}>
                <Image source={{ uri: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2b84.png' }} style={{ width: 80, height: 80}} />
            </View>
            <View style={styles.body}>
              <View style={styles.ViewMain}>
                <View style={styles.ViewImage}>
                  <Image source={{ uri: 'https://w7.pngwing.com/pngs/825/406/png-transparent-casino-token-online-casino-gambling-game-others-miscellaneous-game-stack.png' }} style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.ViewTexto}>
                  <Text>Descripción...</Text>
                </View>
              </View>
              <View style={styles.ViewMain}>
                <View style={styles.ViewImage}>
                <Image source={{ uri: 'https://w7.pngwing.com/pngs/825/406/png-transparent-casino-token-online-casino-gambling-game-others-miscellaneous-game-stack.png' }} style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.ViewTexto}>
                  <Text>Descripción...</Text>
                </View>
              </View>
              <View style={styles.ViewMain}>
                <View style={styles.ViewImage}>
                <Image source={{ uri: 'https://w7.pngwing.com/pngs/825/406/png-transparent-casino-token-online-casino-gambling-game-others-miscellaneous-game-stack.png' }} style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.ViewTexto}>
                  <Text>Descripción...</Text>
                </View>
              </View>
            </View>
            <View style={{backgroundColor:'#4990B0',height:80,borderRadius:10,marginLeft:10,marginBottom:10,marginRight:10, justifyContent:'center', alignItems:'flex-end'}}>
              <Button title={'Log Out'} titleStyle={{color:'white', fontWeight:'bold'}} buttonStyle={{width:140, height:40, backgroundColor:'#2A9ACC', marginRight:20}}/>
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
      ViewMain: {
        flex:1,
        flexDirection:'row',
        backgroundColor: '#4990B0',
        height:147,
        color: 'white',
        fontSize:13,
      },
      ViewTexto: {
        justifyContent:"center",
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
        paddingLeft:15,
        justifyContent:"center",
        borderColor:'black',
        marginTop:32,
        marginLeft: 11,
    
      },

    });

