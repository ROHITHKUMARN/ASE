angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  //Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('Registration', function($scope, $ionicModal, $timeout){
   //registration  modal
  $scope.registerData = {};
  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/playlists.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };
  // Open the register modal 
  $scope.register = function() {
    $scope.modal.show();
  }; 
  // Perform the register action when the user submits the login form  
  $scope.doRegister = function() {
    console.log('Doing Registeration', $scope.registerData);
    // Simulate a register delay
    $timeout(function() {
      $scope.closeRegister();
    },1000);
  };
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('mycontroller2', function ($scope, $http){
            $scope.sentimentCheck = function(){
                var emo = $scope.homedata;
                var callback =$http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?apikey=5843303f5348f644d70585f140b295db23aa4643&outputMode=json&text='+emo);
                callback.success(function (data) {
                    if(data!=null && data.docSentiment!=null)
                    {
                        $scope.output1 = "Score is " + data.docSentiment.score;
                        $scope.output2 = "Type  is " + data.docSentiment.type;
                    }
                })
            }
})
.controller('mycontroller1', function ($scope, $http){
            $scope.converttoSpeech = function(){
                 var text=$scope.homedata;
                 var textToSpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=b234d9a3-d86a-4476-9c56-07173e317489&password=0pmyS3pDPqUv&text='+text;
                 document.getElementById("audio").innerHTML= "<video controls='' autoplay='' name='media'><source src='"+textToSpeechUrl+"' type='audio/ogg'></video>";
            }
});