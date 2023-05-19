import { StatusBar } from 'expo-status-bar';
import {Modal, StyleSheet,Button, Text, ScrollView, View,FlatList,Image } from 'react-native';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [count,setCount] = useState(0);
const [visible,setVisible] = useState(false);
  const [list,setList] = useState([]);

  function addList(text)
{
if(text==='')
{
setList((prevItems)=>[...prevItems])    
}
else{
setList((prevItems)=>[text,...prevItems])}

}

function deleteList(id)
{
  let filterList=list.filter((item,index)=>index!==id)
  setList(filterList);
console.log(filterList)
}

const submitHandler =()=>{
  setCount(count+1);
}

const visibilityHandler=()=>{
  setVisible(!visible)
}
  return (

    <View style={styles.appContainer}>

     
      <Button title='Open the lists' onPress={visibilityHandler} />
      <GoalInput onAddList={addList} onVisible={visibilityHandler} visibility={visible}/>
    
{list.length===0 ?  ( <Image source={require('./assets/favicon.png')} style={styles.image}/>) :(
     
       <FlatList
        data={list}
       renderItem={(item)=> {
         return(
             
       
       <GoalItem itemId = {item.index} itemItems={item.item} pressHandler={deleteList}/>
       
         )
 }}
       style={styles.listz}/>
      )}
    
     
     {/* Another way of listing item using ScrollView */}
      
      {/* <ScrollView style={styles.listz}>
      { list.map((list,index)=> {
        return(
      
      <Text key={index} style={styles.textz}>{list}</Text>
        )
}
      )
      }
</ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  
  appContainer: {
    marginTop:22,
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textz :{
    margin:10, 
    borderBottomWidth:3, 
    borderRadius:7,
    padding : 9,
    borderBottomColor:'#470b87',
    backgroundColor :'#ac88eb',
    color : 'white'
  },

  
  listz :{
    flex: 5,
   
  },
  image:{
    width:300,
    height:300,
    alignItems:'center',
    alignContent:'center',
    marginLeft:20,
    marginTop:150
          }
});
