import React from "react";
import { Picker, View } from "react-native";
import {
  StyleSheet,
  Switch,
  Text,
  Button,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function Banco() {
  const [dado, setDado] = React.useState();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [sliderValue, setsliderValue] = React.useState(1);

  function handle(val, nomeCampo) {
    setDado({ ...dado, [nomeCampo]: val });
  }

const dadoVazio = {
  limite:0,
  nome:'',
  idade:'',
  genero:'',
  estudante:false,

}

  function objectLength(obj){
		let length= 0;  
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				length++;
			}
		}

		return length
	}


  function abrirConta() {

    let length = objectLength(dado);
    if(length === 5){
      const dadosTela = {
        Nome:dado.nome,
        Idade:dado.idade,
        Genero:dado.genero,
        Estudante:dado.estudante ? 'Ativo' : 'Inativo',
        Limite:dado.limite
      }
  
      alert(JSON.stringify(dadosTela))
      
    }else{
      alert("ERRO: \n preencha todos os dados");
    }
    
  }

  function resetData() {
    setDado(dadoVazio);
  }

  return (
    <>
      <>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome"
          onChangeText={(val) => handle(val, "nome")}
          value={dado?.nome}
        />
        <View style={styles.view}>
          <TextInput
            style={styles.input}
            onChangeText={(val) => handle(val, "idade")}
            value={dado?.idade}
            placeholder="Digite sua Idade"
            keyboardType="numeric"
          />
        </View>
      </>

      <View style={styles.pickerView}>
        <Picker
          style={styles.picker}
          onValueChange={(val) => handle(val, "genero")}
          selectedValue={dado?.genero}
        >
          <Picker.Item label="Selecione seu Genero" value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>

      <Text>Estudante:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(val) => handle(val, "estudante")}
        value={dado?.estudante}
      />

      <Text>Limite: {sliderValue}</Text>
      <Slider
        onValueChange={(val) => handle(val, "limite")}
        value={dado?.limite?.toFixed(2)}
        onSlidingStart={(sliderValue) =>
          sliderValue
            ? setsliderValue(parseInt(sliderValue))
            : setsliderValue(sliderValue + 100)
        }
        minimumValue={250}
        maximumValue={1000}
      />

      <View style={styles.abrirConta}>
        <Button
          title="Abrir Conta"
          onPress={() => abrirConta()}
        />
      </View>
      <View style={styles.resetar}>
        <Button
          title="Resetar"
          onPress={() => resetData()}
        />
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 250,
  },
  pickerView: {
    paddingBottom: 30,
    alignItems: "center",
  },
  resetar: {
    paddingTop: 40,
    borderRadius: 60,
    width: 300,
    paddingLeft: 70,
  },
  abrirConta: {
    paddingTop: 40,
    borderRadius: 60,
    width: 300,
    paddingLeft: 70,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    paddingBottom: 30,
  },
});
