'use strict';

function MBCoachingController($scope,$resource){
	
	//$scope.coaches = [];
	//$scope.progLanguage = [];
	//$scope.userID = {};
	$scope.selectedPath = {};

	$scope.print=function(){
		$resource('/jsonapi/get_my_paths').get({},function(response){
			$scope.selectedPath = response;
			console.log($scope.selectedPath);
		});
		
	}
	/*$scope.saveFields=function($userID, $selectedCoach, $selectedLanguage){
		var selectedFields = {"userID" : userID,
					"selectedCoach" : selectedCoach,
					"selectedLanguage" : selectedLanguage
					}
		selectedFields.$save(function(response){
			$scope.response = response;
			console.log(response);
			$scope.get_levels_toImprove();
		})
	};

	$scope.get_levels_toImprove=function(){

		
	}

	*/

	//retrieve stored levels to improve
	/*if($cookieStore.get("type")){
		$scope.improveLevel = $cookieStore.get("type");
	}*/
	
	



}