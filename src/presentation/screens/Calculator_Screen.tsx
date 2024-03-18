import React from 'react'
import { View,Text, Pressable } from 'react-native'
import { colors, stylesGlobal } from '../../config/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator_Screen = () => {
  const { 
    number,
    buildNumber, 
  } = useCalculator();
  return (
    <View style={stylesGlobal.calculatorContainer}>
      <View style = {{ paddingHorizontal:30, paddingBottom:20 }}>
        <Text style={ stylesGlobal.mainResult}>{ number }</Text>
        <Text style={ stylesGlobal.subResult}>15</Text>
      </View>

      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => console.log("C") } blackText label="C"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("+/-") } blackText label="+/-" color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("del") } blackText label="del" color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("/") } label="/"   color={colors.orange}/>
      </View>

      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("7") } label="7"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("8") } label="8"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("9") } label="9"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("X") } label="X"   color={colors.orange}/>
      </View>
      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("4") } label="4"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("5") } label="5"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("6") } label="6"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("-") } label="-"   color={colors.orange}/>
      </View>
      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("1") } label="1"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("2") } label="2"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("3") } label="3"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("+") } label="+"   color={colors.orange}/>
      </View>
      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("0") } label="0"   color={colors.lightGray} doublesize/>
        <CalculatorButton onPress={ () => buildNumber(".") } label="."   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => console.log("=") } label="="   color={colors.orange}/>
      </View>


    </View>
  )
}
