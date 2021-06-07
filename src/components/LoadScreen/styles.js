import {StyleSheet} from 'react-native';
import styled from 'styled-components';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    logo: {
      width: 210,
      height: 120,
      marginBottom: 15
    },

    button: {
      width: 300,
      height: 62,
      backgroundColor: '#ff6600',
      marginTop: 70,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

    buttonText:{
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff'
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },

  });

  //make this component available to the app
  export {styles} ;