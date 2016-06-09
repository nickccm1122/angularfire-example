'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */
angular.module('exampleApp')

.controller('MainCtrl', [
    '$scope',
    'userService',
    'itemService',
    function(
        $scope,
        userService,
        itemService) {

        /*
         * Initialize
         */
        $scope.items = "";
        $scope.users = "";
        $scope.newItem = {
            name: "",
            desc: "",
            belongsTo: ""
        };

        $scope.data = {
            newUserName: "",
            currentUser: "",
            selectedUser: "",
            users: userService.getUsers().$loaded(function(users) {
                console.log("Users loaded.");
                $scope.users = users;
            })
        }

        // $watch the selectiion of user from the view
        $scope.$watch('data.selectedUser', function(newUserId, oldUserId) {
            $scope.updateCurrentUser(newUserId);
        });

        /*
         * add user
         */
        $scope.addUser = function() {
            console.log("Adding user..", $scope.data.newUserName);
            var newUser = {
                name: $scope.data.newUserName
            }
            userService.addUser(newUser);
            $scope.data.newUserName = "";
        };

        /*
         * create a snippet to the user selected
         */
        $scope.updateCurrentUser = function(userId) {
            if (userId != "") {
                $scope.data.currentUser = $scope.users.$getRecord(userId);
                $scope.refreshItems();
            };
        };

        /*
         * update both users and items to build the reference to each other
         */
        $scope.addItemToCurrentUser = function() {

            $scope.newItem.belongsTo = $scope.data.currentUser.$id;
            // update items
            itemService.addItem($scope.newItem).then(function(ref) {
            	// then update user
                userService.addItemRefToUser($scope.data.currentUser.$id, ref.key)
                    .then(function(ref) {

                        //update items list
                        $scope.refreshItems();
                    });
            });
            // reset the newitem
            $scope.newItem = {
                name: "",
                desc: "",
                belongsTo: ""
            };
        };

        /*
         * called when a item is being removed
         */
        $scope.removeItem = function(index, itemId) {
            $scope.users.$getRecord($scope.data.currentUser.$id).items[itemId] = false;
            $scope.users.$save($scope.users.$indexFor($scope.data.currentUser.$id));
            $scope.refreshItems();
        };

        /*
         * Refresh the items being displayed
         */
        $scope.refreshItems = function() {
            $scope.items = [];
            angular.forEach($scope.data.currentUser.items, function(value, id) {
                if (value) {
                    itemService.getItemsById(id).then(function(item) {
                        $scope.items.push(item);
                    });
                }
            });
        };
    }
]);
