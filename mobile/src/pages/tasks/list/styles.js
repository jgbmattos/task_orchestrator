import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: Constants.statusBarHeight + 20,
            backgroundColor: "#ffffff"
        },
        headerText:{
            fontSize: 20,
            fontWeight: "bold",
        },
        taskCard: {
            height: 180,
            flex: 1,
            elevation: 2,
            marginTop: 5,
        },
        taskItem: {
            padding: 10,
            flex:1,
        },
        taskContent: {
            flex: 2,
            paddingTop: 10,
        },
        taskFooter: {
            flex: 1,
            flexDirection: "row",
            flexGrow: 1,
        },
        taskProjectId: {
            fontSize: 12,
            fontWeight: "bold",
        },
        taskTitle: {
            fontSize: 19,
        },
        taskDescriptionLabel: {
            fontSize: 16,
        },
        taskDescription: {
            fontSize: 16,
        },
        taskTimeStatistics: {
            flexDirection: "row",
            flexGrow: 1,
            justifyContent: "flex-end",
        },
        taskNotBreached: {
            color: "black",
            fontSize: 20,
            paddingRight: 5,
        },
        taskBreached: {
            color: "red",
            fontSize: 20,
            paddingRight: 5,
        },
        taskFixedBar: {
            fontSize: 20,
        },
        timeEstimate: {
            paddingLeft: 5,
            fontSize: 20,
        }
    },
);