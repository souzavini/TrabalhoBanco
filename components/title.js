import { StyleSheet, Text,View } from "react-native";
import sizes from '../sizes.js'

import React from "react";

export default function Title(props) {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.titleText}>Bank International</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: sizes.titulo,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
    paddingTop:30,
    paddingBottom:30,
  }
});
