'use strict';

/**
 * Created by TanghaoTsui on 14-8-7.
 */




angular.module('partyBidApp')
	.controller('bid_list_controller', function ($scope, $location, $routeParams) {


		$scope.go_activity_list = function () {


			Activity.find_by_name($routeParams.activity_name).change_attribute('is_choosed', false);
			$location.path('/activity_list');

		};



		$scope.start_new_bid = function (bid_serial_number) {


			$location.path('/bid_signup/' + $routeParams.activity_name );

		}

	});