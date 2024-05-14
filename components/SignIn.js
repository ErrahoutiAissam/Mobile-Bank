import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text style={styles.connexion}>Connexion</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={styles.username}>username</Text>
        </View>
        <Button
          style={[styles.frame4, styles.frameFlexBox]}
          mode="contained"
          labelStyle={styles.frameBtn}
          contentStyle={styles.frameBtn1}
        >
          Se Connecter
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  frameBtn1: {
    width: 375,
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameLayout: {
    width: 378,
    overflow: "hidden",
  },
  frameIcon: {
    height: 58,
    width: 375,
    overflow: "hidden",
  },
  connexion: {
    fontSize: FontSize.size_13xl,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    width: 274,
    height: 33,
  },
  frame1: {
    paddingHorizontal: 46,
    paddingVertical: 0,
    marginTop: 157,
    justifyContent: "center",
    width: 375,
  },
  frame: {
    height: 249,
    alignItems: "center",
    width: 375,
    overflow: "hidden",
  },
  username: {
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.a2A2A7,
    textAlign: "left",
    width: 109,
    height: 14,
  },
  frame3: {
    justifyContent: "center",
  },
  frame4: {
    marginTop: 123,
    justifyContent: "center",
  },
  frame2: {
    height: 194,
    marginTop: 62,
    alignItems: "center",
  },
  signIn: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.fFFFFF,
    width: 411,
    height: 832,
    justifyContent: "flex-end",
    paddingHorizontal: 17,
    paddingTop: 83,
    paddingBottom: 244,
    overflow: "hidden",
  },
});

export default SignIn;
