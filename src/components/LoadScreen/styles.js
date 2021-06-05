import {StyleSheet} from 'react-native';
import styled from 'styled-components';

// const Button = styled.button`
//   background: #ff6600;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   transition: all 0.8s;
// `;

// const ButtonContainer = styled.TouchableOpacity`
//     width: 100px;
//     height: 40px
//     padding: 12px;
//     border-radius: 10px;    
//     background-color: ${props => props.backgroundColor};
// `;

// const ButtonText = styled.Text`
//     font-size: 15px;
//     color: ${props => props.textColor};
//     text-align: center;
// `;


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

    texto1:{
      color: '#f8f8ff',
      fontSize: 24,
      padding: 30
    },
    texto2: {
      color: '#fffaf0',
      fontSize: 16,
      padding: 30
    },
    texto3:{
      color: '#f0ffff',
      fontSize: 18,
      textAlign: 'center',
      letterSpacing: 2,
      padding: 30,
      backgroundColor: '#000000',
    },

    texto4:{
      color: '#800000',
      fontSize: 12,
      textAlign: 'center',
      letterSpacing: 2,
    },

    button: {
      width: 300,
      height: 42,
      backgroundColor: '#ff6600',
      marginTop: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

     

    input:{
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
    },

    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },

    bottomText: {
      marginTop: 20,
      fontWeight: '500'
    },

    bottomTextClickable: {
      marginTop: 20,
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute' //not push other components underneath it
    },

    loginFieldsContainer: {
      backgroundColor: 'rgba(200, 200, 200, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      flexWrap:'wrap',
      borderRadius: 20
    }
  });

  //make this component available to the app
  export {styles} ;