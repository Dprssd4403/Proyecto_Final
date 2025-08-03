import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#b3b0b0ff",
        paddingHorizontal: "5%",
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        flex: 1,
        backgroundColor: "#976363ff",
        paddingHorizontal: "5%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 25,
        textTransform: "uppercase",
        letterSpacing: 1.1,
    },
    textInput: {
        width: "90%",
        height: 45,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#bbb",
        backgroundColor: "#fff",
    },
    buttomA: {

    },
    buttomRegis: {
        width: "90%",
        alignItems: "center",
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        alignItems: 'center',
    },
    title2: {
        fontSize: 20,
        marginBottom: 16,
        color: '#444',
    },
    title3: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 25,
        textTransform: "uppercase",
        letterSpacing: 1.1,
    },
    text: {
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 2,
    },
    productDesc: {
        fontSize: 13,
        color: '#666',
        marginBottom: 4,
    },
    productPrecio: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c7c2a',
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 12,
    }
})