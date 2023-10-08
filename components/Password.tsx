import { Alert, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as yup from 'yup'

const passwordSchema = yup.object().shape({
    passwordLength : yup.number().min(4,"atleast 4 is Neccessory ").max(16,"At max we can have 16 characters").required
    ("Password Length is Required ! ") 
})

const Password = () => {


  
    const [special , setSpecial] = useState(false)
    const [upperCase , setUpperCase] = useState(false)
    const [number , setNumber] = useState(false)
    const [symbols , setSymbols] = useState(false)
    const [password , setPassword] = useState(false)
    const [passwordLength , setPasswordLength] = useState(false)


    const generatePassword = useCallback(() => {

      let str = ""

      str += upperCase ? 'AQWSEDRFTGYHUJIKOLPMNBVCXZ' : ''
      str += number ? '0987654321' : ''
      str += special ? '~!@#$%^&*()><?:' : ''
      str += symbols ? 'aqwsedrftgyhujikolpmnbvcxz' : ''

      let result = ''
      for(let i = 1 ; i <= passwordLength ; i++ ){
        result += str.charAt(Math.floor(Math.random() * str.length))
      }

      setPassword(result)
    },[upperCase , number , special ,setPasswordLength ,  symbols , passwordLength])

    useEffect(()=>{
      generatePassword()
    },[upperCase , number , special , symbols , passwordLength])
  return (
    <View style={{padding : 10}}>
      <Text style={{fontSize : 30 , fontWeight : '600'}}>Password Generator </Text>
      
      
      <View style={{ gap : 30 , marginTop : 20}}>

      <View style={{flexDirection : 'row', alignItems : 'center'}}>
        <Text style={{flex : 1 , fontSize : 20 , fontWeight : '500'}} >Length : </Text>
        <TextInput style={{borderWidth : 0.5 , borderColor : 'gray' , width : '30%' , borderRadius : 6,
        padding : 10}}
        keyboardType='numeric'
        placeholder="Ex : 8"
        onChangeText={(text)=> setPasswordLength(text)}
        value={passwordLength}
        />
      </View>

<View style={{flexDirection : 'row' , alignItems : 'center'}}>
  <Text style={{flex : 1 , fontSize : 22 , fontWeight : '500'}}>Upper Case : </Text>
  <BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {setUpperCase(isChecked)}}
/>
</View>
<View style={{flexDirection : 'row' , alignItems : 'center'}}>
  <Text style={{flex : 1 , fontSize : 22 , fontWeight : '500'}}>Numbers : </Text>
  <BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {setNumber(isChecked)}}
/>
</View>
<View style={{flexDirection : 'row' , alignItems : 'center' }}>
  <Text style={{flex : 1 , fontSize : 22 , fontWeight : '500'}}>Symbols : </Text>
  <BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {setSymbols(isChecked)}}
/>
</View>
<View style={{flexDirection : 'row' , alignItems : 'center'}}>
  <Text style={{flex : 1 , fontSize : 22 , fontWeight : '500'}}>Special Characters : </Text>
  <BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {setSpecial(isChecked)}}
/>
</View>

      </View>

      {
        password && <View style={{width : Dimensions.get("screen").width * 0.94 , backgroundColor : '#ccc' , marginTop : 20 , elevation : 4 , borderRadius : 6 ,padding : 10 ,}}>
        <Text style={{ color : 'black' ,  fontSize : 18 , textAlign : 'center' }}>
          Your Password : 
        </Text>
        <Text style={{ color : 'black' ,  fontSize : 18 ,}}>{password}</Text>
      </View>
      }
      
    </View>
  )
}

export default Password

const styles = StyleSheet.create({})