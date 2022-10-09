var apiKey = "a2852dfc1aa75c0227e70b0469f64fe9";
var savedSearches = [];

var searchHistoryList = function(cityName) {
    $('.past-search:contains("' + cityName + '")').remove();