import * as React from "react";
import { StyleSheet, View } from "react-native";
import SignIn from "../components/SignIn";
import Frame from "../components/Frame";
import { Color } from "../GlobalStyles";

const AndroidLarge = () => {
  return (
    <View style={styles.androidLarge1}>
      <SignIn />
      <Frame />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge1: {
    backgroundColor: Color.fFFFFF,
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default AndroidLarge;
