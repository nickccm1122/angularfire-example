'use strict';

/**
 * @ngdoc service
 * @name exampleApp.userService
 * @description
 * # userService
 * Factory in the exampleApp.
 */
angular.module('exampleApp')

.factory('userService', [
    '$firebaseArray',
    '$firebaseObject',
    function(
        $firebaseArray,
        $firebaseObject) {

        // Service logic
        // hold a reference of users form firebase 
        var userRef = firebase.database().ref().child("users");
        // convert to firebase array to process CRUD operations
        var users = $firebaseArray(userRef);

        // Public API here
        return {
            addUser: function(user) {
                // create a new user
                users.$add(user).then(function(ref) {
                    var id = ref.key;
                    users.$indexFor(id); // returns location in the array
                });
            },
            getUsers: function() {
                // return a users of firebaseArray
                return users;

            },
            addItemRefToUser: function(userId, itemKey) {
                var currentUserItemsRef = userRef.child("/" + userId + "/items/" + itemKey);
                return currentUserItemsRef.set(true);
            },
            getItemsForUser: function(userId) {
                var itemsRef = userRef.child("/" + userId + "/items")
                return $firebaseArray(itemsRef).$loaded();
            },
            removeItemFromUser: function(userId,itemid) {
                //Todo
                var itemsRef = userRef.child("/" + userId + "/items/" + itemid);
                return itemsRef.remove();
            }
        };
    }
]);
