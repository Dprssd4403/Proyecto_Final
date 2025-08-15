import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";


export const styles = StyleSheet.create({
    titleWelcome: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
        marginBottom: 12,
        textAlign: 'center',

    },
    textDescription: {
        fontSize: 16,
        color: 'white',
        marginBottom: 24,
        textAlign: 'center',
    },
    containerForm: {
        marginBottom: 20
    },
    iconForm: {
        position: 'absolute',
        bottom: 15,
        right: 10
    },
    textRedirect: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
     containerModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    padding: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  headerModal: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
  },
  containerIcon: {
    flex: 1,
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    right: 0,
  },
  titleModal: {
    
    fontSize: 18,
    fontWeight: "bold",
    color: "#5f54f8ff",
  },
  imageModal: {
    marginTop: 10,
    width: 140,
    height: 140,
  },
  containerImageM: {
    alignItems: "center",
  },
  containerQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonQuantity: {
    height: 50,
    width: 50,
    backgroundColor: "#5f54f8ff",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderRadius: 15,
  },
  buttonQuantityText: {
    color: "#ccc",
    fontSize: 20,
    fontWeight: "bold",
  },
  textQuantity: {
    fontSize: 18,
  },
  buttonAddCart: {
    backgroundColor: "#5f54f8ff",
    marginTop: 15,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonAddCartText: {
    color: "#ccc",
    fontWeight: "bold",
  },
  textStock: {
    fontSize: 18,
    color: '#873424',
    textAlign: "center",
  },
})