import "react-native-gesture-handler";
import React, { useState, Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";

const LoadScreen = ({ navigation }) => {
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../src/image/background_load.png")}
        style={[styles.background, styles.container]}
      >
        <Image
          source={require("../../../src/image/logo.png")}
          style={styles.logo}
        />

        <View style={styles.animalDetailsView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Tela Inicial");
            }}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoadScreen;
