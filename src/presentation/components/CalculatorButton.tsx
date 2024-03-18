import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, stylesGlobal } from '../../config/app-theme';


interface Props{
  label:string;
  color?:string;
  doublesize?:boolean;
  blackText?:boolean;
  onPress:()=>void;
}



export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doublesize = false,
  blackText = false,
  onPress
}:Props) => {
  return (
    <Pressable 
    onPress={ ()=> onPress()}
    style={ ({ pressed }) => ({
      ...stylesGlobal.button,
      backgroundColor:color,
      width:( doublesize) ? 180 : 80,
      opacity:(pressed) ? 0.8 : 1
    })}>
    <Text style={{
      ...stylesGlobal.buttonText,
      color:(blackText) ? 'black' : 'white'

    }}>{ label }</Text>
  </Pressable>
    )
}
