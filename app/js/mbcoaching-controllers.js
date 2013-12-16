'use strict';

function mBCoachingController($scope,$resource,$cookieStore){
	
	$scope.coaches = ["Shannon","Sandra","Zander","Master Sergeant"];
	$scope.progLanguage = ["Java", "Javascript", "Ruby","Python"];
	$scope.userID = {};

	$scope.saveFields=function($userID, $selectedCoach, $selectedLanguage){
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



	//retrieve stored levels to improve
	/*if($cookieStore.get("type")){
		$scope.improveLevel = $cookieStore.get("type");
	}*/
	
	



}