import React, { useState, Component } from 'react';
import { SQLite } from "expo-sqlite";

class mySqlHandler {

    errorCB(err) {
        console.log("SQL Error: " + err);
    };

    successCB() {
        console.log("SQL executed fine");
    };

    openCB() {
        console.log("Database OPENED");
    };

    constructor() {
        this.db = SQLite.openDatabase("db.db", '1.0', 'test DB', 200000, this.openCB, this.errorCB);
    }

    createMySqlDB(count, item) {

        this.db.transaction((tx) => {
            //tx.executeSql(
            //    "truncate table Menu;"
            //);
            console.log("drop");

            tx.executeSql(
                "create table if not exists Menu2 (id int,  name text);"
            );
            console.log("create");

            console.log("insert into Menu2 (id, name) values (" + count + ", " + item + ");");
            tx.executeSql(
                "insert into Menu2 (id, name) values ( " + count + ", foo);"
            );
            console.log("inserted");

        }, this.errorCB, this.successCB);
    }

    static instance = null;

    static createInstance() {
        var object = new mySqlHandler();
        return object;
    }

    static getInstance() {
        if (!mySqlHandler.instance) {
            mySqlHandler.instance = mySqlHandler.createInstance();
        }
        return mySqlHandler.instance;
    }
}