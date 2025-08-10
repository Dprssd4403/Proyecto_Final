import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";


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
    }
})