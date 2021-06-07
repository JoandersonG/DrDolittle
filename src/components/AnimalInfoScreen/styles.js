import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  closeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginEnd: 20,
    marginTop: 20,
    backgroundColor: "white",
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  closeButtonText: {
    color: "#c83737",
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center'
  },

  image: {
    width: "100%",
    height: "50%",
    marginBottom: 15,
  },

  animalDetailsView: {
    height: 450,
    width: "80%",
    marginTop: -80,
    backgroundColor: "#c83737",
    padding: 15,
  },

  detailsText: {
    color: "white",
    fontSize: 16,
    marginBottom: 16,
  },

  detailsTitle: {
    fontWeight: "600",
    fontSize: 17,
  },

  horizontal: {
    marginBottom: 20,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    flexDirection: "row",
  },

  proximoAnimalButton: {
    width: "46%",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  buttonText: {
    color: "#c83737",
    fontSize: 16,
    fontWeight: "500",
  },
});

//make this component available to the app
export default styles;
