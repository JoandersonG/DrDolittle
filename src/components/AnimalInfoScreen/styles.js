import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ccaaff'
    },
    

    image: {
      width: '100%',
      height: '50%',
      marginBottom: 15
    },

    animalDetailsView: {
      height: 500,
      width: '80%',
      marginTop: -80,
      backgroundColor: '#c83737',
      padding: 15
    },

    detailsText: {
      color: 'white',
      fontSize: 16,
      marginBottom: 16
    },

    detailsTitle: {
      fontWeight: '600',
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

    horizontal: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },

    proximoAnimalButton: {
      fontWeight: '500',
      fontSize: 16,
      textAlign: 'center',
      marginStart: 20,
      marginEnd: 5,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },

    buttonText: {
      color: '#c83737',
      fontSize: 16,
      fontWeight: '500',
    },


    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute' //not push other components underneath it
    },

    homeTitle: {
      color: 'black',
      fontSize: 34
    }

  });

  //make this component available to the app
  export default styles ;