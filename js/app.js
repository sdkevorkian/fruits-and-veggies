/* setup your angular app here */
/*global angular*/

var fruitsAndVeggies = angular.module("FruitAndVeggie", []);
fruitsAndVeggies.controller('Main', ['$scope', function($scope) {
    $scope.allProduce = shuffle(fruits.concat(vegetables));
    $scope.fruits = fruits;
    $scope.veggies = vegetables;
    $scope.userFruits = [];
    $scope.userVeggies = [];
    $scope.gameEnd = false;
    $scope.gameWon = false;

    $scope.toFruits = function(i) {
        var thisFruit = $scope.allProduce[i];
        $scope.userFruits.push(thisFruit);
        $scope.allProduce.splice(i, 1);
        checkIfOver();
    };

    $scope.toVeggies = function(i) {
        $scope.userVeggies.push($scope.allProduce[i]);
        $scope.allProduce.splice(i, 1);
        checkIfOver();
    };

    $scope.toRight = function(i) {
        $scope.allProduce.push($scope.userFruits[i]);
        $scope.userFruits.splice(i, 1);
        checkIfOver();
    };


    $scope.toLeft = function(i) {
        $scope.allProduce.push($scope.userVeggies[i]);
        $scope.userVeggies.splice(i, 1);
        checkIfOver();
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

    $scope.gameDone = function() {
        var wonGame = true;
        $scope.userFruits.forEach(function(fruit) {
            if (!$scope.fruits.includes(fruit)) {
                wonGame = false;
                console.log(fruit);
            }
        });
        $scope.userVeggies.forEach(function(veggie) {
            if (!$scope.veggies.includes(veggie)) {
                wonGame = false;
                console.log(veggie);
            }
        });
        return wonGame;
    };

    var checkIfOver = function() {
        if ($scope.allProduce.length === 0) {
            console.log('done');
            $scope.gameEnd = true;
            $scope.gameWon = $scope.gameDone();
            if ($scope.gameWon) {
                $scope.message = 'you won!!';
            } else {
                $scope.message = 'you lost! recheck your fruits and veggies';
            }
        }
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
