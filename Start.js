import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Nöbetçi Eczaneleri</Text>
      <Pressable onPress={()=>navigation.navigate("HomePage")}>
        <Text style={styles.Button}>Göster</Text>
      </Pressable>
    </View>
  )
}

export default Start

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ed313e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text:{
      color:'white',
      fontSize:48,
      justifyContent:'center',
      alignItems:'center',
      marginVertical:20
    },
    Button:{
        color:'white',
        backgroundColor:'#2196f2',
        borderRadius:20,
        padding:15,
        width:200,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
        fontWeight:400,
        textAlign:'center'
    }
  });