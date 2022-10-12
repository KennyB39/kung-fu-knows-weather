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

    var searchHistoryContainerEl = $("#search-history-container");
    searchHistoryContainerEl.append(searchEntryContainer);

    if (savedSearches.length > 0){
        var previousSavedSearches = localStorage.getItem("savedSearches");
        savedSearches = JSON.parse(previousSavedSearches);
    }

    savedSearches.push(cityName);
    localStorage.setItem("savedSearches", JSON.stringify(savedSearches));

    $("#search-input").val("");

    var loadSearchHistory = function() {
        var savedSearchHistory = localStorage.getItem("savedSearches");
        if (!savedSearchHistory) {
            return false;
        }

        savedSearchHistory = JSON.parse(savedSearchHistory);
        for (var i = 0; i < savedSearchHistory.length; i++) {
            searchHistoryList(savedSearchHistory[i]);
        }
    };

    var currentWeatherSection = function(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
    }
        .then(function(response) {
            var cityLon = response.coord.lon;
            var cityLat = response.coord.lat;
        })
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`)
            .then(function(response) {
                return response.json();
            })
        