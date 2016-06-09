'use strict';

/**
 * @ngdoc service
 * @name exampleApp.itemService
 * @description
 * # itemService
 * Factory in the exampleApp.
 */
angular.module('exampleApp')

.factory('itemService', [
    '$firebaseArray',
    '$firebaseObject',
    function(
        $firebaseArray,
        $firebaseObject
    ) {
        // Service logic
        var itemRef = firebase.database().ref().child("items");
        // convert to firebase array to process CRUD operations
        var items = $firebaseArray(itemRef);

        // Public API here
        return {
            getItemsById: function(itemId) {
                //Todo
                return $firebaseObject(itemRef.child("/" + itemId)).$loaded();

            },
            addItem: function(item) {
                return items.$add(item);
            },
            deleteItem: function(itemId) {
              //Todo
              return itemRef.child("/"+ itemId).remove();
            }
        };
    }
]);
