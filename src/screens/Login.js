import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppSafeAreaView } from '../common/AppSafeAreaView'
import { apple, google, headerLogo } from '../helper/images'
import FastImage from 'react-native-fast-image'
import PrimaryButton from '../common/buttons/primaryButton/PrimaryButton'
import { AppText, BLACK, EIGHTEEN, FIFTEEN, MONTSERRAT_SEMI_BOLD } from '../common/AppText'
import Feather from 'react-native-vector-icons/Feather'
const { width } = Dimensions.get('window');

const Login = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.mainView}>
        <FastImage
          source={headerLogo}
          resizeMode="center"
          style={{ width: 160, height: 80, alignSelf: "center" }}
        />
         <AppText
            color={BLACK}
            weight={MONTSERRAT_SEMI_BOLD}
            type={EIGHTEEN}
            style={{textAlign: "center",marginHorizontal:5}}
        >Get Started with your Free Account</AppText>
        <View>
          <TouchableOpacity style={[styles.iconContainer,{marginTop:"10%"}]}>
            <FastImage source={google} style={styles.google} resizeMode='contain'/>
            <AppText style={styles.googleText}>Continue with Google</AppText>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.iconContainer,{marginTop:"5%"}]}>
            <FastImage source={apple} style={styles.google} resizeMode='contain'/>
            <AppText style={styles.googleText}>Continue with Apple</AppText>
          </TouchableOpacity>

          <View style={styles.linecontainer}>
            <View style={styles.line}></View>
            <AppText style={styles.or}>or</AppText>
            <View style={styles.line}></View>
          </View>

          <View style={[styles.inputContainer,{marginTop:"10%"}]}>
            <View style={styles.phone}>
            <Feather name="phone" color={'#808080'} size={20}/>
            </View>
            <View style={styles.inputBoxContainer}>
            <TextInput placeholder='Enter Your Phone Number'maxLength={10} keyboardType='numeric' style=
            {styles.inputBox}/>
            </View>
          </View>
        </View>
        <PrimaryButton  title={'Continue With Number'} buttonStyle={styles.buttonStyle}/>
        <AppText  style={styles.signup}>New to PaperBridge? Sign Up</AppText>
        </View>
    </AppSafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      marginVertical:"4%"
  },
  buttonStyle:{
      borderRadius:20,
      width:"90%",
      marginHorizontal:20,
      marginTop:"10%"
  },
  signup:{
      color:"#1399FF",
      textAlign:"center"
  },
  iconContainer:{
    flexDirection:"row",
    borderRadius:5,
      width:"90%",
      marginHorizontal:20,
      borderColor:"#808080",
      borderWidth:1,
      paddingVertical:9,
      alignItems:"center",
      justifyContent:"center"
  },
  google:{
    height:30,
    width:30,
  },
  googleText:{
    color:"#808080",
    fontSize:12,
    fontWeight:"400",
    marginLeft:9
  },
  linecontainer:{
    flexDirection:"row",
    marginTop:"14%",
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center'
  },
  line:{
    backgroundColor:"#808080",
    height:0.7,
    width:"45%"
  },
  or:{
    color:"#808080",
    fontSize:16,
    marginHorizontal:5,
    fontWeight:"300"
  },
  inputContainer:{
    flexDirection:"row",
    borderRadius:5,
      width:"90%",
      marginHorizontal:20,
      borderColor:"#808080",
      borderWidth:1,
      paddingVertical:9,
      alignItems:"center",
      height:50,
      paddingHorizontal:10
    
  },
  inputBox:{
    padding:0,
    margin:0,
    marginHorizontal:10,
    width:width*0.6
  },
  phone:{
    marginBottom:-5
  },
  
});
