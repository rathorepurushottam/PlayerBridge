import { StyleSheet, View } from "react-native";
import { AppSafeAreaView } from "../common/AppSafeAreaView";
import FastImage from "react-native-fast-image";
import { banner1, headerLogo } from "../helper/images";
import {
  AppText,
  BLACK,
  EIGHTEEN,
  GRY,
  MONTSERRAT_BOLD,
  MONTSERRAT_LIGHT,
  MONTSERRAT_SEMI_BOLD,
  TWELVE,
} from "../common/AppText";

const Login = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.mainView}>
        <FastImage
          source={headerLogo}
          resizeMode="center"
          style={{ width: 160, height: 80, alignSelf: "center" }}
        />
        <FastImage
          source={banner1}
          resizeMode="cover"
          style={{ width: 320, height: "52%", alignSelf: "center" }}
        />
        {/* <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
                <FastImage source={banner1} resizeMode="center" style={{width: 300, height: "50%"}}/>
                </View> */}
        <View style={{ alignItems: "center"}}>
          <View style={{ width: "70%", marginVertical: 20 }}>
            <AppText
              color={BLACK}
              weight={MONTSERRAT_SEMI_BOLD}
              type={EIGHTEEN}
              style={{textAlign: "center"}}
            >
              Searching for Opportunity or Seeking help from Experts{" "}
            </AppText>
          </View>
          <View style={{ width: "70%" }}>
            <AppText color={GRY} weight={MONTSERRAT_LIGHT} type={TWELVE} style={{textAlign: "center"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </AppText>
          </View>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
