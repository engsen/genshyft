'use strict';

/*Scripts for tabs*/

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

/*TournamentController*/

function TournamentController($scope,$resource){
	$scope.add_tournaments = function(){
		$scope.tournament_title = {};
		$scope.tournament_type = {};
		$scope.tournament_rounds = {};
	}

	$scope.add_rounds= function(){
		
	}
}
