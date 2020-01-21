var app = angular.module('ZoekenViewKFController', ['ngRoute', 'myAppRouter'])

app.controller('ZoekenViewKFController', ['$routeParams', '$scope', '$location', function ($routeParams, $scope, $location) {

    $scope.data = $routeParams;

    //kijkt of de array niet leeg is
    if ($routeParams.werking != "") {
        $scope.werking = $scope.ZoekenModel.GetWerkingData($routeParams.werking);
    }
    if ($routeParams.ingredienten != "") {
        $scope.ingredienten = $scope.ZoekenModel.GetIngredientenData($routeParams.ingredienten);
    }
    if ($routeParams.symptomen != "") {
        $scope.symptomen = $scope.ZoekenModel.GetSymptoomData($routeParams.symptomen);
    }

    $scope.GoBack = function () {
        $location.path('/ZoekenKF');
    }
    $scope.GoToView = function (id) {
        $location.path('/KruidenFormules/' + id)
    }
}]);