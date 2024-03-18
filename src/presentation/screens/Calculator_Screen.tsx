import React from 'react'
import { View,Text, Pressable } from 'react-native'
import { colors, stylesGlobal } from '../../config/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator_Screen = () => {
  const { 
    number,
    buildNumber, 
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    addOperation,
    multiplyOperation,
    subtractOperation,
    previusNumber,
    calculateResult,
    fomula
  } = useCalculator();
  return (
    <View style={stylesGlobal.calculatorContainer}>
      <View style = {{ paddingHorizontal:30, paddingBottom:20 }}>
        <Text 
        adjustsFontSizeToFit
        numberOfLines={ 1 }
        style={ stylesGlobal.mainResult}>{ fomula }</Text>{
          (fomula === previusNumber)
          ? <Text style={ stylesGlobal.subResult}> </Text>
          : 
          <Text 
          adjustsFontSizeToFit
          numberOfLines={1}
          style={ stylesGlobal.subResult}>{ (previusNumber === '0') ? '': previusNumber }</Text>
       
     }
      </View>

      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ clean } blackText label="C"   color={colors.lightGray}/>
        <CalculatorButton onPress={ toggleSign } blackText label="+/-" color={colors.lightGray}/>
        <CalculatorButton onPress={ deleteOperation } blackText label="del" color={colors.lightGray}/>
        <CalculatorButton onPress={ divideOperation } label="/"   color={colors.orange}/>
      </View>

      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("7") } label="7"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("8") } label="8"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("9") } label="9"   color={colors.lightGray}/>
        <CalculatorButton onPress={ multiplyOperation } label="x"   color={colors.orange}/>
      </View>
      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("4") } label="4"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("5") } label="5"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("6") } label="6"   color={colors.lightGray}/>
        <CalculatorButton onPress={ subtractOperation } label="-"   color={colors.orange}/>
      </View>
      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("1") } label="1"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("2") } label="2"   color={colors.lightGray}/>
        <CalculatorButton onPress={ () => buildNumber("3") } label="3"   color={colors.lightGray}/>
        <CalculatorButton onPress={ addOperation } label="+"   color={colors.orange}/>
      </View>
      <View style={ stylesGlobal.row }>
        <CalculatorButton onPress={ () => buildNumber("0") } label="0"   color={colors.lightGray} doublesize/>
        <CalculatorButton onPress={ () => buildNumber(".") } label="."   color={colors.lightGray}/>
        <CalculatorButton onPress={ calculateResult } label="="   color={colors.orange}/>
      </View>


    </View>
  )
}
