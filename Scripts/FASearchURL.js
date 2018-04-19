// ==UserScript==
// @name        FA Search URL
// @namespace   Artex
// @description adds search parameters to the url
// @include     http://www.furaffinity.net/search*
// @include     https://www.furaffinity.net/search*
// @version     2
// @homepage    https://www.furaffinity.net/user/artex./
// @run-at      document-end
// @license GPL-3.0
// @grant       none
// ==/UserScript==


//parameters that can be exlcuded from the search if they are the default value. Helps shorten the url.
var defaults = {
	"order-by":"relevancy",
	"order-direction":"desc",
	"perpage":"48",
	"range":"all",
	"mode":"extended"
};
var types = { //if all enabled can be excluded from url.
  "type-art": ["on", "1"], //"on" when explicitly set, blank when off, 1 when parameter was not provided to search
  "type-music": ["on", "1"],
  "type-flash": ["on", "1"],
  "type-story": ["on", "1"],
  "type-photo": ["on", "1"],
  "type-poetry": ["on", "1"]
};

var ratings = {
	"rating-general": "on",
	"rating-mature": "on",
	"rating-adult": "on"
};

function isDefault(key, val) {
	if (defaults[key] && defaults[key] == val) {
		return true;
	} else {
		return false;
	}
}

function removeDefaults(formData) {
	//could still remove rating params if the value is "1" or all on "on"
	var searchParams = new Map();
	var typeBlock = new Map(); //wait to append types until all are accounted for.
	var ratingBlock = new Map();
	var defaultTypes = true;
	var defaultRatings = false; //if any rating is 1 search uses content rating defaults
	var allRatings = true; //if all are on user defaults would suffice as well.

	for (var pair of formData.entries()) {
		var [key, val] = pair;
		if (isDefault(key,val) == false) {//ignore default values
			if (types[key]) { //is type value
				typeBlock.set(key, val);
				if (types[key].includes(val) == false) { //not default value
					defaultTypes = false;
				}
			} else if (ratings[key]) {
				ratingBlock.set(key, val);
				if (ratings[key] != val) { //not default value
					allRatings = false;
				}
				if (val == "1") {
					defaultRatings = true;
				}
			} else {
				searchParams.set(key, val);
			}
		}
	}

	if (defaultTypes == false) {
		for (var pair of typeBlock.entries()) {
			var [key, val] = pair;
			searchParams.set(key, val);
		}
	}

	if (defaultRatings ? allRatings : !allRatings) {
		for (var pair of ratingBlock.entries()) {
			var [key, val] = pair;
			searchParams.set(key, val);
		}
	}
	return searchParams;
}

function qStringFromForm(form) { //make query string from form data
	var formData = new FormData(form);
	var searchParams = removeDefaults(formData);
	var stringedParams = [];
	for (var pair of searchParams.entries()) {
		var [key, val] = pair;
		console.log(key, val);
		stringedParams.push(key + "=" + val.replace(/ /g,"+"));
	}
	return stringedParams.join("&");
}

function addQString(str) {
	window.history.replaceState("", "Search", "/search?"+str);
}

addQString(qStringFromForm(document.querySelector("#search-form")));
