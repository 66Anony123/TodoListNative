import React from 'react'
import {Modal, View,Image,TextInput,StyleSheet,Button } from 'react-native'
import { useState } from 'react';

function GoalInput(props) {
    const [text,setText]= useState('');
    
    const inputHandler =(inputText)=>{
        setText(inputText)
      }
      function reListHandler()
      {
        props.onAddList(text)
        setText('')
      }
      const visibilityHandler=()=>{
        setVisible(!visible)
      }

  return (
<>
<Modal visible={props.visibility} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image source={require('../assets/adaptive-icon.png')} style={styles.image}/>
    <TextInput onChangeText={inputHandler} value={text} style={{backgroundColor:'white', margin:12, borderWidth:2, borderRadius:8, borderColor:'red', padding:10, width:'100%'}} placeholder='Type here bickk'/>
    <View style={styles.buttonContainer}>
      <View style= {styles.button1}>
    <Button title = "Submit" onPress={reListHandler}/>
    </View>
    <View style={styles.button2}>
    <Button title='Cancel' onPress={props.onVisible}/>
    </View>
    </View>
    </View>
    </Modal>
    </>
  )
  }
  export default GoalInput;

  const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding:16,
        width : '100%',
        backgroundColor:'#2f6475'
      },
      buttonContainer :{
        flexDirection:'row',
        marginTop :19,
      },
      button1:{
        
        width :100,
        marginHorizontal : 10,
        backgroundColor:'green'
      },
      button2:{
        
        width :100,
        marginHorizontal : 10,
        color:'green'
      },    
      image:{
width:100,
height:200
      }
  })