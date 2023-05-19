import React, { useState } from 'react'
import { StyleSheet,Text,Pressable } from 'react-native';
function GoalItem(props) {

 
  return (
  //  bind() aids to preconfigure a function for a future execution and here this parameter is must and then only you can pass the parameters you require 
    <>

    <Pressable android_ripple={{color:'red'}} onPress={props.pressHandler.bind(this,props.itemId)} >  
<Text key ={props.itemId} style={styles.textz}>{props.itemItems}</Text>
</Pressable>
    </>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    textz :{
        margin:10, 
        borderBottomWidth:3, 
        borderRadius:7,
        padding : 9,
        borderBottomColor:'#470b87',
        backgroundColor :'#ac88eb',
        color : 'black'
      },
  })