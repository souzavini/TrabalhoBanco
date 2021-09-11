import React from "react";
import { StyleSheet, View, Button } from "react-native";
export default function Buttons() {
  return (
    <>
    <View style={styles.abrirConta}>
      <Button
        title="Abrir Conta"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      </View>
      <View style={styles.resetar}>
        <Button
          title="Resetar"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  resetar: {
    paddingTop:40,
    borderRadius:60,
    width:300,
    paddingLeft:70
  },
  abrirConta:{
    paddingTop:40,
    borderRadius:60,
    width:300,
    paddingLeft:70
  }
});
