// ==UserScript==
// @name         FA Story Fixes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fixes unicode characters in txt stories
// @author       Artex
// @match        https://www.furaffinity.net/view/*
// @connect      d.facdn.net
// @grant        GM_xmlhttpRequest
// ==/UserScript==

//fixes garbled text when txt files are ansi encoded. Need a way to detect correct encoding, otherwise a encoding dropdown at the top of a story might be good. 

function getText(Url, callback) { //callback params: text
    GM_xmlhttpRequest({ //ran into CORS issue between FA web server and content server with standard xmlHttpRequest.
        method: "GET",
        url: Url,
        overrideMimeType: "text/plain; charset=windows-1252", //Problem files appear to be ansi encoded, but browser assumes utf-8 since server doesn't specify.*/
        onload: function(response) {
            callback(response.responseText);
        }
    });
}


function fixEncoding() {
    var downloadButton = document.querySelector(".download-logged-in");
    if (downloadButton.href.match(/\.txt$/)) {
        getText(downloadButton.href, function(text) {
            var story = document.querySelector(".p20l > div:nth-child(1)"); //gross, but good enough.
						story.innerHTML = "";
						var pre = document.createElement("pre");
						pre.style.whiteSpace = "pre-wrap";
						pre.style.fontFamily = "Open Sans";
						pre.textContent = text;
            story.appendChild(pre);
        });
    }
}


fixEncoding();
