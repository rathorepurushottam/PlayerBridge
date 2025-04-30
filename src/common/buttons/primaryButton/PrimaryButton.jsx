import React from 'react';
import {
  AppText,
  SIXTEEN,
  WHITE,
} from '../../AppText';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const PrimaryButton = ({
  title,
  buttonStyle,
  onPress,
  smallBtn,
  titleStyle,
  type,
  disable,
  color,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      {...rest}
      style={buttonStyle}
      disable={disable}
      onPress={onPress}>
      <View
        style={[styles.linearGradient, smallBtn]}>
        <AppText
          type={type ? type : SIXTEEN}
          // weight={}
          style={[styles.buttonText, titleStyle]}
          color={WHITE}
          >
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    linearGradient: {
      borderRadius: 30,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#1399FF',
      // borderRadius:20,
      marginVertical:"5%"
    },
    linearGradientWrapper: {
      borderRadius: 5,
      padding: 1,
    },
    smallBtn: {
      height: 50,
      width: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    buttonText:{
      color:'#fff',
      fontWeight:"500",
      textTransform:"uppercase"
  
    },
  });
  
  