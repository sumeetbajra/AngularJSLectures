var portfolio = angular.module('portfolio');

portfolio.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($http) {
	var vm = this;
	vm.name = "Sumit";

	vm.users = [];

	vm.getUsers = function() {
		$http.get('http://localhost:8080/data.json').then(function(res) {
			vm.users = res.data;
		});
	}
}