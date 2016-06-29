
	var todoApp = angular.module('todoApp', []);

	todoApp.controller('MainCtrl', MainCtrl);

	function MainCtrl() {

		this.name = 'Sumit';
		this.users = ['Ram', 'Shyam', 'Hari'];

		this.handleClick = function() {
			var newName = document.getElementById('newName').value;

			if(newName.length) {
				this.users.push(newName);
			}
			document.getElementById('newName').value = '';
		}

		this.removeItem = function(index) {
			this.users.splice(index, 1);
		}
	}
