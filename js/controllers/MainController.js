var app = angular.module('BoltNetworkApp', []);
app.controller('MainController', ['$scope', function($scope) {
    $scope.program = 
    {
        series: "Sherlock",
        series_img: 'img/sherlock.jpg',
        genre: 'Crime drama',
        season: 3,
        episode: "The Empty Hearse",
        description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
    }
    
    $scope.bestProgram = 
    {
        series: "Fargo",
        series_img: 'http://goo.gl/UK3gtm',
        genre: 'Crime drama',
        season: 2,
        episode: "Don't ya know",
        description: "is an American dark comedy crime drama television series created and written by Noah Hawley. The show is inspired by the 1996 film of the same name written and directed by the Coen brothers, who serve as executive producers on the series. It premiered on April 15, 2014, on FX. In January 2006, Lorne Malvo (Billy Bob Thornton) passes through Bemidji, Minnesota and influences put-upon insurance salesman Lester Nygaard (Martin Freeman) with his malice and violence. Meanwhile, Deputy Molly Solverson (Allison Tolman) and Duluth police officer Gus Grimly (Colin Hanks) team up to solve a series of murders they believe may be linked to Malvo and Nygaard.",
        datetime: new Date(2014, 11, 21, 11, 00, 00, 00)
    }
}]);