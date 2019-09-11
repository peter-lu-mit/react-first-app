import React, { useState, Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView, ListView } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Menu, MenuProvider, MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
//import { SQLite } from "expo-sqlite";


//import { Constants } from 'expo';


function OrderHandler(item) {

    const [text, textAppend] = useState([]);

    function AppendItem(item) {
        textAppend(text => [...text, item]);
    }

    return (<ScrollView style={styles.contentContainer}>
        {text.map((x) => createOrderItem(x))}
    </ScrollView>);
    /*
    static instance = null;

    static createInstance() {
        var object = new OrderHandler();
        return object;
    }

    static getInstance() {
        if (!mySqlHandler.instance) {
            mySqlHandler.instance = mySqlHandler.createInstance();
        }
        return mySqlHandler.instance;
    }
    */

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1',
        padding: 50
    },
    contentContainer: {
        paddingVertical: 20,
        fontSize: 18,
        height: 40
    }
});