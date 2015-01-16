// rename this file and the angular module to the name of the thing you are building
module.exports = angular.module('kanapp', [
	'ngRoute', 'ngAria', 'ngAnimate'
]).config(function($locationProvider) {
	$locationProvider.html5Mode(true);
});