/*
To automatically update previous page:
- fetch edit submission page, get form data, match page bbcode tag and insert next page id.
- post edited form data.

will need to monitor network traffic to see exactly how the data is sent.

*/

var pageTracker = {}

pageTracker.createUI = function(page) {
    var titleArea = page.querySelector("div.p10t:nth-child(11)"); //gross, maybe I should just use regex.
    var titleHeader = titleArea.querySelector("h4:first-child");
    var titleBar = document.createElement("div");
    titleBar.className = "pt-title-bar";
    titleBar.appendChild(titleHeader);
    titleArea.insertBefore(titleBar, titleArea.firstChild);
}

pageTracker.createUI(document);