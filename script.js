var apiKey = "a2852dfc1aa75c0227e70b0469f64fe9";
var savedSearches = [];

var searchHistoryList = function(cityName) {
    $('.past-search:contains("' + cityName + '")').remove();
}

var searchHistoryEntry = $("<p>");
    searchHistoryEntry.addClass("past-search");
    searchHistoryEntry.text(cityName);

    var searchEntryContainer = $("<div>");
    searchEntryContainer.addClass("past-search-container");

    searchEntryContainer.append(searchHistoryEntry);