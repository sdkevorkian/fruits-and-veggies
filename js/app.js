/* setup your angular app here */
/*global angular*/

var fruitsAndVeggies = angular.module("FruitAndVeggie", []);
fruitsAndVeggies.controller('Main', ['$scope', function($scope) {
    $scope.allProduce = shuffle(fruits.concat(vegetables));
    $scope.fruits = fruits;
    $scope.veggies = vegetables;
    $scope.userFruits = [];
    $scope.userVeggies = [];


    $scope.toFruits = function(i) {
        var thisFruit = $scope.allProduce[i];
        $scope.userFruits.push(thisFruit);
        $scope.allProduce.splice(i, 1);

    };

    $scope.toVeggies = function(i) {
        $scope.userVeggies.push($scope.allProduce[i]);
        $scope.allProduce.splice(i, 1);
    };

    $scope.toRight = function(i) {
        $scope.allProduce.push($scope.userFruits[i]);
        $scope.userFruits.splice(i, 1);
    };


    $scope.toLeft = function(i) {
        $scope.allProduce.push($scope.userVeggies[i]);
        $scope.userVeggies.splice(i, 1);
    };

    $scope.checkIfInArray = function(produce, array) {
        var isPresent;

        if (array.indexOf(produce) === -1) {
            isPresent = false;
        } else {
            isPresent = true;
        }
        return isPresent;
    };
}]);


// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);



function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
