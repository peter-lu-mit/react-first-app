import React, { useState, Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView, ListView } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Menu, MenuProvider, MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { SQLite } from "expo-sqlite";
import OrderHandler from "./OrderHandler"
//import { Constants } from 'expo';


class OrderHandler {

    const[text, textAppend] = useState([]);

    AppendItem(item) {
        textAppend(text => [...text, item]);
    }

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
}