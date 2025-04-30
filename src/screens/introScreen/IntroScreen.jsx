import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { AppSafeAreaView } from "../../common/AppSafeAreaView";
import IntroSlider from "../../common/IntroSlider/IntroSlider";
import { headerLogo } from "../../helper/images";
import PrimaryButton from "../../common/buttons/primaryButton/PrimaryButton";
import { BorderlessButton } from "react-native-gesture-handler";
import { AppText } from "../../common/AppText";
import NavigationService from "../../navigation/NavigationService";
import Login from "../Login";
import { LOGIN } from "../../navigation/routes";

const IntroScreen = () => {
    const onPress = ()=>{
        NavigationService.navigate(LOGIN)
    }
  return (
    <AppSafeAreaView>
      <View style={styles.mainView}>
        <FastImage
          source={headerLogo}
          resizeMode="center"
          style={{ width: 160, height: 80, alignSelf: "center" }}
        />
        <IntroSlider/>
        <PrimaryButton onPress={onPress} title={'Login'} buttonStyle={styles.buttonStyle}/>
        <AppText  style={styles.signup}>New to PaperBridge? Sign Up</AppText>
        </View>
    </AppSafeAreaView>
  )
}

export default IntroScreen

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
    }
  });
  