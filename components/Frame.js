import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame = memo(() => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.napBar}>
        <View style={styles.email}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.frameParent}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={styles.errahoutiaissam}>
                <Text style={styles.errahoutiaissamTxt}>
                  <Text style={styles.errahouti}>errahouti.</Text>
                  <Text style={styles.aissam}>aissam</Text>
                </Text>
              </Text>
            </View>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/vector-105.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  vectorIcon: {
    width: 24,
    height: 22,
  },
  errahouti: {
    fontSize: FontSize.size_sm,
  },
  aissam: {
    fontSize: FontSize.size_mini,
  },
  errahoutiaissamTxt: {
    width: "100%",
  },
  errahoutiaissam: {
    lineHeight: 14,
    textTransform: "lowercase",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.e1E2D,
    textAlign: "left",
    display: "flex",
    width: 206,
    height: 14,
    alignItems: "center",
  },
  frame1: {
    width: 246,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameChild: {
    maxHeight: "100%",
    marginTop: 6,
    width: 352,
  },
  frameParent: {
    height: 21,
    marginTop: -13,
    width: 352,
  },
  email: {
    height: 30,
    paddingLeft: 0,
    width: 352,
  },
  napBar: {
    backgroundColor: Color.colorWhitesmoke,
    width: 375,
    height: 54,
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    position: "absolute",
    top: 418,
    left: 12,
    width: 387,
    justifyContent: "center",
  },
});

export default Frame;
