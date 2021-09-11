import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Title,
} from "react-native";

import colors from '../colors.js'

export default function InputText() {
  const [text, SetText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Nome"
        onChangeText={SetText}
        value={text}
      />
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite sua Idade"
          keyboardType="numeric"
        />
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    paddingBottom:30,
  },
});
