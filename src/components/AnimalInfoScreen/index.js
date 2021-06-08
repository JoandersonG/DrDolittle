import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const AnimalInfoScreen = ({ navigation }) => {
  var nome = navigation.getParam("nome");
  var nomeCientifico = navigation.getParam("nomeCientifico");
  var imagePath = navigation.getParam("imagePath");
  var detalhes = navigation.getParam("detalhes");
  var alimentos = navigation.getParam("alimentos");
  var ondeVive = navigation.getParam("ondeVive");
  var curiosidades = navigation.getParam("curiosidades");

  //placeholder
  if (nome == null || nome == "") {
    nome = "Hipopótamo";
    nomeCientifico = "Hippopotamus amphibius";
    imagePath = require("../../../src/image/animal4.jpg");
    detalhes =
      "O hipopótamo-comum ou hipopótamo-do-nilo é um mamífero Omnívoro";
    alimentos = "Comem dezenas de quilos de plantas por dia";
    ondeVive = " África subsariana";
    curiosidades =
      "São considerados os mamíferos mais perigosos do planeta. Calcula-se que 500 pessoas morrem anualmente devido a seus ataques.";
  }

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} />

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          navigation.navigate("Tela Inicial");
        }}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <View style={styles.animalDetailsView}>
        <Text style={styles.animalName}>{nome}</Text>

        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>Nome Científico: </Text>
          {nomeCientifico}
        </Text>
        <Text style={styles.detailsText}>{detalhes}</Text>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>Onde é encontrado: </Text>
          {ondeVive}
        </Text>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>O que come: </Text>
          {alimentos}
        </Text>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>Curiosidades: </Text>
          {curiosidades}
        </Text>

        <View style={styles.horizontal}>
          <TouchableOpacity style={styles.proximoAnimalButton}>
            <Text style={styles.buttonText}>Animal Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.proximoAnimalButton}>
            <Text style={styles.buttonText}>Próximo Animal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AnimalInfoScreen;
