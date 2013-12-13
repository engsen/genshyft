function PurposeDrivenController($scope,$resource,$location,$cookieStore,$http){
	
	    $scope.player = $resource('/jsonapi/player').get();

	    $scope.myVideos = 
	    [ 
		    {vName:'videoTitle1',vStatus:'true',img:'img/purposedrivenPlaceholder/Purpose Driven 1.jpg',desc: "Watch how Singpath owner plans to change the world !"},
		    {vName:'videoTitle2',vStatus:'true',img:'img/purposedrivenPlaceholder/Purpose Driven 2.jpg',desc: "Microsoft talks about coding."},
		    {vName:'videoTitle3',vStatus:'false',img:'img/purposedrivenPlaceholder/lock.jpg',desc: "Video is locked"},
		    {vName:'videoTitle4',vStatus:'false',img:'img/purposedrivenPlaceholder/lock.jpg',desc: "Video is locked"},

	    ];

	     	$scope.totalVideosUnlock =2;

	




	  //  $scope.myVideos[0] {vName:"videoTitle1",vStatus:"unlock",};

	};