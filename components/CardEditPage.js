import { View, Text } from 'react-native'
import React from 'react'
import colors from '../styles /colors';


const CardEditPage = (props) => {
   
   const style ={
      marginTop: 20,
      marginHorizontal: 70,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      height: props.heightValue || 150,
      width: props.widthValue || 250,
      borderRadius: 10,
      backgroundColor: colors.lightgrey,
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 10,
      shadowColor: colors.lightgrey,
      shadowOffset: { width: 0, height: 0 },

   };

  return (
    <View style={style}>
        {props.children}
    </View>
  )
}



export default CardEditPage