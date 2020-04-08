import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: "row",
    },
    productName:{
        flex:1,
        fontSize: 25,
        marginLeft: 10,
        fontWeight: "bold",
    },
    image: {
        flex: 6,
        alignItems: "stretch",
        marginTop: 15,
    },
    productTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    product: {
        paddingTop: 10,
        flex: 3,
        flexDirection: "row",
        justifyContent:  "space-around",
        backgroundColor: "powderblue",
    },
    column1: {
        paddingTop: 10,
        flexDirection: "column",
    },
    column2: {
        paddingTop: 10,
        flexDirection: "column",
    },
    column3: {
        paddingTop: 10,
        flexDirection: "column",
    },
});