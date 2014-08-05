'use strict';

angular.module('partyBidApp')
    .controller('create_activity_controller', function ($scope, $location) {
        Initialization.create_page();
//        $scope.names = Activity.is_activityKey_null();
        $scope.go_activity_list = function () {

            $location.path('/activity_list');
        };
        $scope.save_item = function (name) {
            if (Activity.is_repeat(name)) {
                $scope.tips = Activity.send_message_on_repeat();
            }
            else {
                var activity = new Activity(name);
                activity.save();
                $location.path('/activity_sign_up/' + activity.name);
            }
        }
    });
