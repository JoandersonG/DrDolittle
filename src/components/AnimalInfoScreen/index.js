import "react-native-gesture-handler";
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import styles from "./styles";

const AnimalInfoScreen = ({ navigation }) => {
  const [animalScientificName, setAnimalScientificName] = useState();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/image/animal2.jpg")}
        style={styles.image}
      />

      <View style={styles.animalDetailsView}>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>Nome Científico: </Text>Sarcophilus
          harrisii
        </Text>
        <Text style={styles.detailsText}>
          Mamífero marsupial da família Dasyuridae endêmico da ilha da Tasmânia{" "}
        </Text>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>Onde é encontrado: </Text>Austrália
        </Text>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>O que come: </Text> um animal
          carnívoro que se alimenta de diferentes espécies de pequeno porte como
          coelhos, cobras, larvas de insetos, ovos de pássaros e animais mortos
        </Text>
        <Text style={styles.detailsText}>
          <Text style={styles.detailsTitle}>Curiosidades: </Text>Esse mamífero
          ficou famoso com o personagem infantil Taz. As fêmeas normalmente são
          maiores do que os machos. Estima-se que o diabo da Tasmânia come o
          correspondente a cerca de 15% do peso de seu corpo diariamente.
        </Text>

        <View style={styles.horizontal}>
        <TouchableOpacity style={styles.proximoAnimalButton}>
          <Text style={styles.buttonText}>Próximo Animal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.proximoAnimalButton}>
          <Text style={styles.buttonText}>Animal Anterior</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
export default AnimalInfoScreen;
