import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/image/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.animalDoDiaTitle}>Animal do Dia</Text>
      <TouchableOpacity style={styles.animalDoDiaView}
        onPress={() => {
          navigation.navigate('Descubra Animais', {
            'imagePath' : require("../../../src/image/animal1.jpg"),
            'nome' : 'Suricato',
            'nomeCientifico' : ' Suricata suricatta',
            'detalhes' : 'Estes animais têm cerca de meio metro de comprimento, em média 730 gramas de peso, e pelagem acastanhada.',
            'ondeVive' : 'Pode ser encontrada na África do Sul, Botsuana, Namíbia e Angola.',
            'alimentos' : 'Eles comem principalmente besouros, lagartas, cupins, aranhas e escorpiões.',
            'curiosidades' : 'Escava túneis e buracos no solo e vive em bandos de até 50 indivíduos. Timão, das histórias do Rei Leão, é um suricato.'
            }) 
        }}>
        <Text style={styles.animalDoDiaName}>Suricato</Text>
        <Image
          source={require("../../../src/image/animal1.jpg")}
          style={styles.animalDoDiaImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.animalCategoriaView}
        onPress={() => {
          navigation.navigate('Descubra Animais', {
            'imagePath' : require("../../../src/image/animal3.jpg"),
            'nome' : 'Gato Siamês',
            'nomeCientifico' : 'Felis catus',
            'detalhes' : 'Gato siamês é uma raça de gato oriental, caracterizada por um corpo elegante e esguio e uma cabeça marcadamente triangular.',
            'ondeVive' : 'Original da Tailândia',
            'alimentos' : 'Eles comem principalmente besouros, lagartas, cupins, aranhas e escorpiões.',
            'curiosidades' : 'Escava túneis e buracos no solo e vive em bandos de até 50 indivíduos. Timão, das histórias do Rei Leão, é um suricato.'
            }) 
        }}>
        <Image
          source={require("../../../src/image/dog.png")}
          style={styles.animalCategoriaImagem}
        />
        <Text style={styles.animalCategoriaTitulo}>Animais Domésticos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.animalSilvestreView}
        onPress={() => {
          navigation.navigate('Descubra Animais', {
            'imagePath' : require("../../../src/image/animal2.jpg"),
            'nome' : 'Diabo-da-Tasmânia',
            'nomeCientifico' : 'Sarcophilus harrisii',
            'detalhes' : 'Mamífero marsupial da família Dasyuridae endêmico da ilha da Tasmânia',
            'ondeVive' : 'Austrália',
            'alimentos' : ' um animal carnívoro que se alimenta de diferentes espécies de pequeno porte como coelhos, cobras, larvas de insetos, ovos de pássaros e animais mortos',
            'curiosidades' : 'Esse mamífero ficou famoso com o personagem infantil Taz. As fêmeas normalmente são maiores do que os machos.'
            }) 
        }}>
        <Image
          source={require("../../../src/image/lion.png")}
          style={styles.animalCategoriaImagem}
        />
        <Text style={styles.animalCategoriaTitulo}>Animais Silvestres</Text>
      </TouchableOpacity>

      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.animalPerigosoView}
        onPress={() => {
          navigation.navigate('Descubra Animais', {
            'imagePath' : require("../../../src/image/animal4.jpg"),
            'nome' : 'Hipopótamo',
            'nomeCientifico' : 'Hippopotamus amphibius',
            'detalhes' : 'O hipopótamo-comum ou hipopótamo-do-nilo é um mamífero Omnívoro',
            'ondeVive' : ' África subsariana',
            'alimentos' : 'Comem dezenas de quilos de plantas por dia',
            'curiosidades' : 'São considerados os mamíferos mais perigosos do planeta. Calcula-se que 500 pessoas morrem anualmente devido a seus ataques.'
            })
        }}>
          <Image
            source={require("../../../src/image/snake.png")}
            style={styles.animalPerigosoImagem}
          />
          <Text style={styles.animalCategoriaHorizontalTitulo}>Animais{'\n'}Perigosos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.animalExtintoView}
        onPress={() => {
          navigation.navigate('Descubra Animais', {
            'imagePath' : require("../../../src/image/animal5.jpg"),
            'nome' : 'Quagga',
            'nomeCientifico' : 'Equus quagga quagga',
            'detalhes' : 'Espécie de zebra extinta no século XIX',
            'ondeVive' : ' África do Sul',
            'alimentos' : 'Eram animais herbívoros e primordialmente pastavam para se alimentar, mas também se alimentavam de arbustos, folhas e galhos.',
            'curiosidades' : 'O quagga era uma espécie de zebra que habitava a África do Sul e foi extinta no século XIX, decorrente da caça por sua pele e couro. O último da espécie morreu no zoológico de Amsterdam, em 1883.'
            })
        }}>
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
