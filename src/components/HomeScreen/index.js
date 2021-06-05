import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { styles, Title } from "./styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/image/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.animalDoDiaTitle}>Animal do Dia</Text>
      <View style={styles.animalDoDiaView}>
        <Text style={styles.animalDoDiaName}>Suricato</Text>
        <Image
          source={require("../../../src/image/animal1.jpg")}
          style={styles.animalDoDiaImage}
        />
      </View>

      <TouchableOpacity style={styles.animalCategoriaView}>
        <Image
          source={require("../../../src/image/dog.png")}
          style={styles.animalCategoriaImagem}
        />
        <Text style={styles.animalCategoriaTitulo}>Animais Domésticos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.animalSilvestreView}>
        <Image
          source={require("../../../src/image/lion.png")}
          style={styles.animalCategoriaImagem}
        />
        <Text style={styles.animalCategoriaTitulo}>Animais Silvestres</Text>
      </TouchableOpacity>

      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.animalPerigosoView}>
          <Image
            source={require("../../../src/image/snake.png")}
            style={styles.animalPerigosoImagem}
          />
          <Text style={styles.animalCategoriaHorizontalTitulo}>Animais{'\n'}Perigosos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.animalExtintoView}>
          <Image
            source={require("../../../src/image/dinossaur.jpg")}
            style={styles.animalExtintoImagem}
          />
          <Text style={styles.animalCategoriaHorizontalTitulo}>Animais{'\n'}Extintos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
