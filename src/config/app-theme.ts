import { StyleSheet } from "react-native";

export const colors = {
    darkGray:"#2D2D2D",
    lightGray:"#9b9b9b",
    orange:"#FF9427",
    textPrimary:"#FFF",
    textSecondary:"#666",
    background:"#000"
}



export const stylesGlobal = StyleSheet.create({
   background:{
    flex:1,
    backgroundColor:colors.background
   },
   calculatorContainer:{
    flex:1,
    padding:0,
    justifyContent:'flex-end',
   },
   mainResult:{
    color:colors.textPrimary,
    fontSize:70,
    textAlign:'right',
    marginBottom:10,
    fontWeight:'300'
   },
   subResult:{
    color:colors.textSecondary,
    fontSize:40,
    textAlign:'right',
    fontWeight:'300'
    },
    button:{
        height:80,
        width:80,
        backgroundColor:colors.darkGray,
        borderRadius:10,
        justifyContent:'center',
        marginHorizontal:10,
    },
    buttonText:{
        textAlign:'center',
        padding:5,
        fontSize:30,
        color:'white',
        fontWeight:'300'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:15,
        paddingHorizontal:10
    }


});