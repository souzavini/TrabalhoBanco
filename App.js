import React from "react";
import { StyleSheet, SafeAreaView, TextInput, Text, View } from "react-native";
import Banco from "./components/banco";
import Title from "./components/title";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title />
        <Banco />
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fffff'
  }
});
