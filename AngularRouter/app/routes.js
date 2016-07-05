
var portfolio = angular.module('portfolio');

portfolio.config(RouteProvider);

function RouteProvider($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/home.html'
		})
		.when('/about', {
			templateUrl: 'app/templates/about.html'
		})
		.when('/contact', {
			templateUrl: 'app/templates/contact.html'
		})

}