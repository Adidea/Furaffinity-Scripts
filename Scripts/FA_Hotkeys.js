// ==UserScript==
// @name        FA Hotkeys
// @namespace   Artex
// @description hotkeys for furaffinity
// @author      Artex
// @homepageURL http://www.furaffinity.net/user/artex./
// @homeURL     https://openuserjs.org/scripts/Artex/FA_Hotkeys
// @icon        data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzgwMTgzNzU4MTkyRTUxMUI3MTk4QTE4RDY1NTFCMEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEVGNTc3NDI5RkUwMTFFNUEwNUE5OEMyQjZGOTlFMzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEVGNTc3NDE5RkUwMTFFNUEwNUE5OEMyQjZGOTlFMzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTAxODM3NTgxOTJFNTExQjcxOThBMThENjU1MUIwRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3ODAxODM3NTgxOTJFNTExQjcxOThBMThENjU1MUIwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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
// @include     http://www.furaffinity.net/*
// @include     https://www.furaffinity.net/*
// @run-at      document-end
// @version     1.6.4
// @grant       none
// ==/UserScript==

//needs rewritten. The way functions are mapped to keys is just stupid. Wouldn't be hard to do it better.

/*jshint esnext: true */
var settingsOpen = false;
var settingsMenu = null;
var hotkeys = new Map();
var storage = window.localStorage;
var isResized = false; //for fit to screen - these globals are kind of bleh.
var smallImage = ""; //small submission view
var debugEnabled = false;

function log() {
    if (debugEnabled === true) {
        console.log.apply(console, arguments);
    }
}

//get the name of the key that was pressed
function keyFromKeyboardEvent(event) {
    var key = null;
    if (event.key) { 
        key = event.key; 
    } else {
        var identifier = event.keyIdentifier;
        if (identifier.search(/^U\+/) === -1) {
            key = identifier;
        } else { //not unicode, likely the key name
            key = String.fromCharCode(parseInt(identifier.replace(/^U\+/,""), 16)).toLowerCase();
        }
    }
    return key;
}

//page url contains the given string
function windowUrlContains(url) {
    var windowUrl = window.location.href;
    if (windowUrl.search(url) != -1) {
        return true;
    } else {
        return false;
    }
}

function nextElement(n) {
    var next = n.nextSibling;
    if (next.nodeType == 1 || next === null) {
        return next;
    } else {
        return nextElement(next);
    }
}

function previousElement(n) {
    var previous = n.previousSibling;
    if (previous.nodeType == 1 || previous === null) {
        return previous;
    } else {
        return previousElement(previous);
    }
}

function isTyping() { // is a text field in focus?
    var active = document.activeElement;
    if (active.tagName == "TEXTAREA" || active.tagName == "INPUT") {
        return true;
    } else {
        return false;
    }
}

function getSubmissionSource(){
  var controlBar = document.getElementsByClassName("button submission");
  for (var i=0; i < controlBar.length; i++) {
   var link = controlBar[i].getElementsByTagName("a")[0];
    if (link !== undefined && link.textContent == "Download") {
      return link.href;
    }
  }
}

////////////////////////////////////////
//          hotkey actions
///////////////////////////////////////

function fullView() {
    //sets image source to loading gif and then full image
    if (windowUrlContains(/www.furaffinity.net\/(view|full)/)) {
       var image = document.getElementById("submissionImg");
       var largeImage = getSubmissionSource();
       if (largeImage != image.src) {
           smallImage = image.src;
           image.src = loadingGif.src;
           image.src = largeImage;
       } else {
           image.src = smallImage;
       }

       /* old full view code
        var url = window.location.href;
        var newUrl = "";
        if (url.search("view") != -1) {
            newUrl = url.replace("view", "full");
        } else {
            newUrl = url.replace("full", "view");
        }
        window.location.href = newUrl;
        */
    }
}

function fitToScreen() {
    function ResizeImage(img) {
        var viewportX = window.innerWidth;
        var viewportY = window.innerHeight;
        var imageX = img.naturalWidth;
        var imageY = img.naturalHeight;
        if (isResized) { //if resized, return normal dimensions.
            img.width = imageX;
            img.height = imageY;
            isResized = false;
        } else {
            if (imageX > viewportX) {
                img.width = viewportX;
                img.height = imageY * (viewportX/imageX);
            }
            if (imageY > viewportY) { //image is larger then window
                img.width = imageX * (viewportY/imageY);
                img.height = viewportY;
            }
            isResized = true;
        }
    }
    var image = document.getElementById('submissionImg');
    if (image) {
        window.location.hash = '#submissionImg';
        ResizeImage(image);
    }
}


function favorite() {
    if (windowUrlContains(/www.furaffinity.net\/(view|full)/)) {
      var favButton = document.getElementsByClassName("button fav")[0];
        if (favButton) {
            favButton.click();
        }
      }
      /* old favorite code
      document.querySelector('a.p20r').click();
      */
}

function navigateLeft() {
    if (windowUrlContains(/www.furaffinity.net\/(view|full)/)) {
        var center = document.getElementsByClassName("minigallery-title")[0];
        previousElement(center).firstChild.firstChild.firstChild.click(); //Prone to breaking if structure changes
    } else if (windowUrlContains(/www.furaffinity.net\/(gallery|scraps|favorites)/)) {
        var url = window.location.href;
        var reg = /(favorites|gallery|scraps)(\/.+\/)([^/]+)(\/$|$)/;
        var pageNum = url.match(reg);
        pageNum = pageNum === null ? 2 : pageNum[3];
        pageNum = pageNum > 1 ? pageNum : 2;
        var nextPage = url.replace(reg, "$1$2" + (pageNum - 1) + "$4");
        window.location.href = nextPage;
    } else if (windowUrlContains(/www.furaffinity.net\/browse/)) {
        var url = window.location.href;
        var reg = /(browse\/)(\d+)(?=\/$|$)/;
        var pageNum = url.match(reg);
        pageNum = pageNum === null ? 2 : pageNum[2];
        pageNum = pageNum > 1 ? pageNum : 2;
        var nextPage = url.replace(reg, "$1" + (pageNum - 1));
        window.location.href = nextPage;
    }
}

function navigateRight() {
    if (windowUrlContains(/www.furaffinity.net\/(view|full)/)) {
        var center = document.getElementsByClassName("minigallery-title")[0];
        nextElement(center).firstChild.firstChild.firstChild.click();
    } else if (windowUrlContains(/www.furaffinity.net\/(gallery|scraps|favorites)/)) {
        var url = window.location.href;
        var reg = /(favorites|gallery|scraps)(\/.+\/)([^/]+)(\/$|$)/;
        var pageNum = url.match(reg);
        var nextPage;
        if (pageNum === null) {
            //console.log(pageNum);
            nextPage = url + "2/";
        } else {
            //console.log(pageNum);
            nextPage = url.replace(reg, "$1$2" + (+pageNum[3] + 1) + "$4");
        }
        window.location.href = nextPage;
    } else if (windowUrlContains(/www.furaffinity.net\/browse/)) {
        console.log("TEST");
        var url = window.location.href;
        var reg = /(browse\/)(\d+)(?=\/$|$)/;
        var pageNum = url.match(reg);
        console.log(pageNum);
        var nextPage;
        if (pageNum === null) {
            //console.log(pageNum);
            nextPage = url + "2/";
        } else {
            //console.log(pageNum);
            nextPage = url.replace(reg, "$1" + (+pageNum[2] + 1));
        }
        window.location.href = nextPage;
    }
}

function checkAll() {
    var button = document.getElementsByClassName("section-button invert-selection")[0];
    if (button !== undefined) {
        button.click();
    }
}

function removeChecked() {
    var button = document.getElementsByClassName("section-button remove-checked")[0];
    if (button !== undefined) {
        button.click();
    }
}

////////////////////////////////////////
//          setup hotkeys
///////////////////////////////////////


function saveHotkeys() {
    var save = "";
    hotkeys.forEach(function(func, key) {
        save = save + key + ":" + func.name + "|";
    });
    storage.setItem("FA_HotkeySettings", save);
    log("hotkeys saved");
}

function loadDefaultHotkeys() { //if no keys are saved or data to reset keys.
    hotkeys = new Map();
    hotkeys.set("f", favorite);
    hotkeys.set("g", fitToScreen);
    hotkeys.set("ArrowLeft", navigateLeft);
    hotkeys.set("ArrowRight", navigateRight);
    hotkeys.set("q", checkAll);
    hotkeys.set("e", removeChecked);
    hotkeys.set("1", openSettings);
    log("hotkeys set, saving");
    saveHotkeys();
}

function loadHotkeys() {//load saved hotkey configuration.
    //format "key:functionName|key:functionName"
    var data = storage.getItem("FA_HotkeySettings");
    var dataSuccess = false;
    log("loading hotkey data: ", data);
    if (data !== null) {
        var matches = data.match(/[^\|]+/g);//get key:value - note: would probably break if key was ':' or '|'
        if (matches !== null) { //bad save data
            for (var i in matches ) {
                if (typeof matches[i] === "string") {
                  var key = matches[i].match(/^[^\:]+/g)[0];
                  var func = matches[i].match(/[^\:]+$/g)[0];
                   //a more direct connection between the function name and the function would be ideal..
                   if (func.search(/[\.\(\)]/g) === -1) { //hopefully filter out malacious modifications to localstorage
                       hotkeys.set(key, eval(func)); //eval is my last resort to get the function pointer
                       //Idea: if I assign the functions to a map I can properly get the functions with a string.
                   }
                }

            } 
        } else { dataSuccess = false; }
    }
    if (dataSuccess === false) {
        log("loading default hotkeys");
        loadDefaultHotkeys();
    }
}

function initiateHotkeys() {
    log("iniating hotkey script");
    loadHotkeys();
    //loadDefaultHotkeys();
    //take key input and watch for hotkeys to call.
    window.addEventListener("keydown", function(event) {
        var key = keyFromKeyboardEvent(event);
        log("key:", key);
        log("unicode:", event.keyIdentifier);
        if (hotkeys.has(key) === true && isTyping() === false && event.ctrlKey === false) { //temp fix for accidental hotkeys with browser shortcuts. ctrl+f namely.
            hotkeys.get(key)();
        }
    }, true);
}
////////////////////////////////////////
//          Hotkey settings
///////////////////////////////////////
function openSettings() {
    if (settingsOpen === false) {
        settingsOpen = true;
        var inputs = []; //array of the text inputs

        //This isn't going to be pretty
        //create style sheet for settings menu
        var style = document.createElement("style");
        style.innerHTML = "" +
            "#Hotkey-Settings { " +
            " position: fixed;" +
            " z-index: 99999;" +
            " width: 250px;" +
            " left: 50%;" +
            " right: 50%;" +
            " top: 50%;" +
            " transform: translate(-50%, -50%);" +
            " background-color: #DDD;" +
            " color: #2F2F2F;" +
            " padding: 5px;" +
            "} ";
        //generate settings menu
        var container = document.createElement("table");
        var header = document.createElement("thead");
        var tr1 = document.createElement("tr");
        var th1 = document.createElement("th");
        var titleLeft = document.createTextNode("Key");
        var th2 = document.createElement("th");
        var titleRight = document.createTextNode("Action");
        container.appendChild(style);
        container.appendChild(header);
        header.appendChild(tr1);
        tr1.appendChild(th1);
        th1.appendChild(titleLeft);
        tr1.appendChild(th2);
        th2.appendChild(titleRight);
        //generate input fields
        var n = 0;
        hotkeys.forEach(function(func, key) {
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            var input = document.createElement("input");
            var td2 = document.createElement("td");
            var name = document.createTextNode(func.name);//hopefully func.name has enough support.
            container.appendChild(row);
            row.appendChild(td1);
            //append input later
            row.appendChild(td2);
            td2.appendChild(name);
            input.setAttribute("type","text");
            input.setAttribute("name",func.name);
            input.setAttribute("value",key);
            td1.appendChild(input);
            inputs[n++] = input;

            //hotkey input text field
            input.addEventListener("keydown", function(event) {
                var key = keyFromKeyboardEvent(event);
                log("input: ", key);
                if (key !== "Enter") {
                    event.preventDefault();
                    var oldKey = this.getAttribute("value");
                    var newKey = key;
                    var action = hotkeys.get(oldKey);
                    if (hotkeys.get(newKey) === undefined) {
                        hotkeys.delete(oldKey);
                        hotkeys.set(newKey, action);
                        this.setAttribute("value", newKey);
                        saveHotkeys();
                    } else {
                        //hotkey already in use, alert user
                        var alertStyle = document.createElement("style");
                        alertStyle.innerHTML = "" +
                            "#Hotkey-Settings input[value='" + newKey + "'] {" +
                            "    -webkit-transition: background-color 0.2s;" +
                            "    transition: background-color 0.2s;" +
                            "    background-color: #FFA3A3;" +
                            "} ";
                        container.appendChild(alertStyle);
                        window.setTimeout(function() {
                            alertStyle.innerHTML = "" +
                                "#Hotkey-Settings input[value='" + newKey + "'] {" +
                                "    -webkit-transition: background-color 0.5s;" +
                                "    transition: background-color 0.5s;" +
                                "    background-color: white;" +
                                "} ";
                            window.setTimeout(function() {
                                container.removeChild(alertStyle);
                            },600);
                        }, 800);
                    }
                }
            }, true);
        });
        //reset settings button
        var bottomRow = document.createElement("tr");
        var bottomData = document.createElement("td"); 
        var reset = document.createElement("input");
        container.appendChild(bottomRow);
        bottomRow.appendChild(bottomData);
        reset.setAttribute("type","button");
        reset.setAttribute("value","Reset");
        bottomData.appendChild(reset);
        reset.addEventListener("click", function(event) {
            loadDefaultHotkeys();
            var i = 0;
            hotkeys.forEach(function(func, key) {
                inputs[i++].value = key;
            });
        });
        container.setAttribute("id", "Hotkey-Settings");
        document.body.appendChild(container);
        settingsMenu = container;
    } else {
        settingsOpen = false;
        document.body.removeChild(settingsMenu);
    }
}

initiateHotkeys();
