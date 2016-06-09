'use strict';

/**
 * @ngdoc overview
 * @name exampleApp
 * @description
 * # exampleApp
 *
 * Main module of the application.
 */
angular
    .module('exampleApp', ['firebase'])
    .run(function() {

        /*
         * Initialize Firebase here, put you config in
         */
        var config = {
            apiKey: "XXXXXXX",
            authDomain: "XXXXXXX",
            databaseURL: "XXXXXXX",
            storageBucket: "XXXXXXX",
        };
        firebase.initializeApp(config);
    });
