import {StyleSheet} from 'react-native';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffa671'
    },

    logo: {
      width: 210,
      height: 120,
      marginTop: 15,
      marginBottom: 15
    },

    animalDoDiaTitle: {
      color: 'white',
      fontSize: 24,
      marginTop: 20,
      fontWeight: '500'
    },

    animalDoDiaView: {
      paddingStart: 15,
      flexDirection: 'row',
      backgroundColor: '#ffe6d5',
      borderRadius: 10,
      alignItems: 'center',
    },

    animalDoDiaName: {
      fontWeight: '480',
      fontSize: 36,
      textAlign: 'center',
      marginEnd: 40,
    },

    animalDoDiaImage: {
      width: 70,
      height: 70,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    },

    animalCategoriaImagem: {
      width: 40,
      height: 40,
      marginStart: 5
    },

    animalCategoriaView: {
      width: '70%',
      flexDirection: 'row',
      backgroundColor: '#00d4aa',
      borderRadius: 50,
      marginTop: 20,
      padding: 10,
      paddingVertical: 15,
      alignItems: 'center',
      
    },

    animalSilvestreView: {
      width: '70%',
      flexDirection: 'row',
      backgroundColor: '#8d5fd3',
      borderRadius: 50,
      marginTop: 20,
      padding: 10,
      paddingVertical: 15,
      alignItems: 'center',
    },

    animalCategoriaTitulo: {
      fontWeight: '400',
      fontSize: 26,
      textAlign: 'center',
      marginStart: 20,
      marginEnd: 5
    },

    horizontal: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },

    animalExtintoView: {
      width: '33%',
      height: 180,
      flexDirection: 'column',
      backgroundColor: '#55ddff',
      borderRadius: 30,
      marginTop: 20,
      marginStart: 10,
      marginEnd: 10,
      padding: 10,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },

    animalPerigosoView: {
      width: '33%',
      height: 180,
      flexDirection: 'column',
      backgroundColor: '#d40055',
      borderRadius: 30,
      marginTop: 20,
      marginStart: 10,
      marginEnd: 10,
      padding: 10,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },

    animalCategoriaHorizontalTitulo: {
      fontWeight: '400',
      fontSize: 26,
      textAlign: 'center',
    },

    animalExtintoImagem: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginBottom:15
    },

    animalPerigosoImagem: {
      width: 40,
      height: 40,
      marginBottom:15
    },

  });

  //make this component available to the app
  export {styles, Title} ;