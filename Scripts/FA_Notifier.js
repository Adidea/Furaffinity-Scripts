// ==UserScript==
// @name         FA message notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       Artex
// @match        https://www.furaffinity.net/advertising.html
// @grant        none
// ==/UserScript==

//Either needs to run on a set tab or figure out how communicate between multiple instances of the script so that only one runs.

var Settings = {
	url : "https://www.furaffinity.net/submit/", //smallest page with notification bar I could find
	interval : 60000,
	sound : "", //don't have a good solution for shipping sound as a userscript. Base64 encoded audio coooould work, I probably should make this into an extension
};

function getPage(Url, callback) { //callback params: page
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
		if (xhr.status == 200) {
			callback(xhr.response);
		} else {
			setTimeout(function() { //wait 30 seconds and try again
				getPage(Url, callback);
			},30000);
		}
  });
	xhr.addEventListener("error", function() {
		setTimeout(function() { //wait 30 seconds and try again
			getPage(Url, callback);
		},30000);
	});
  xhr.open("GET", Url + "?t=" + (new Date()).getTime()); //no-cache
  xhr.responseType = "document";
  xhr.send();
}

var notifier = {
	displayTime : 7000, //how long before notification closes
	cooldown : 500, //time between notifications
	queue : [],
	sendNotifications : function () {
		setTimeout(function(){
			var notif = this.queue.shift();
			var notification = new Notification(notif.title, notif.options);
			notification.onclick = function(event) {
				event.preventDefault();
				window.open(notif.page, '_blank').focus();
			};
			setTimeout(notification.close.bind(notification), this.displayTime);
			if (this.queue.length > 0) {
				this.sendNotifications();
			}
		}.bind(this), this.cooldown);
	},
	createNotification : function(title, options, page) { //lies
		this.queue.push({title : title,options : options, page : page});
		if (this.queue.length <= 1) {
			this.sendNotifications();
		}

	}
};

function getAvatar(user) { //user: string, returns users avatar image url
	return "https://a.facdn.net/" + user.toLowerCase() + ".gif";
}

notificationType = {
	note : function(count) {
		if (count == 1) {
			getPage("https://www.furaffinity.net/msg/pms/", function(page) {
				var unreadNote = page.getElementsByClassName("notelinknote-unread")[0];
				if (unreadNote) {
					var subject = unreadNote.innerText;
					var user = unreadNote.closest(".note-list-container").querySelector(".note-list-sender a").innerText; //ew
					var option = {
						body : subject,
						icon : getAvatar(user)
					};
					notifier.createNotification("New message from " + user, option, "https://www.furaffinity.net/msg/pms/");
				}
			});
		} else {
			notifier.createNotification( count + " new note" + (count > 1 ? "s" : ""),{}, "https://www.furaffinity.net/msg/pms/");
		}
	},
	comment : function(count) {
		if (count == 1 ) {
			getPage("https://www.furaffinity.net/msg/others/" , function(page) {
				var commentStream = page.querySelector("#messages-comments-submission .message-stream");
				if (commentStream) { //deleted comment could break this, needs testing.
					var comment = commentStream.firstElementChild;
					var user = comment.querySelector("a[href^='/user/']").innerText;
					var submission = comment.querySelector("a[href^='/view/']");
					var option = {
						icon : getAvatar(user)
					};
					notifier.createNotification(user + " commented on " + submission.innerText, option, submission.href);
				}
			});
		} else {
			notifier.createNotification( count + " new comment" + (count > 1 ? "s" : ""),{}, "https://www.furaffinity.net/msg/others/#comments");
		}
	},
	watch : function(count) {
		if (count == 1) {
			getPage("https://www.furaffinity.net/msg/others/" , function(page) {
				var watchStream = page.querySelector("#messages-comments-submission .message-stream");
				if (watchStream) {
					var watch = watchStream.firstElementChild;
					var user = watch.querySelector(".info span").innerText;
					var option = {
						icon : getAvatar(user)
					};
					notifier.createNotification("New watcher: " + user, option, "https://www.furaffinity.net/user/" + user);
				}
			});
		} else {
			notifier.createNotification( count + " new watch" + (count > 1 ? "es" : ""),{}, "https://www.furaffinity.net/msg/others/#watches");
		}
	}
};


function saveData(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
	var data = JSON.parse(localStorage.getItem(key));
	return data ? data : {privateMessage : 0, comment : 0, watch : 0};
}

function checkNotifications(page, status) {
	var notificationData = loadData("FA_Notification");
	var messageBar = page.getElementsByClassName("message-bar-desktop")[0];
	var comments = messageBar.querySelector("a[href$='comments']");
	var notes = messageBar.querySelector("a[href$='pms/']");
	var watches = messageBar.querySelector("a[href$='watches']");
	comments = comments ? comments.innerText.match(/^\d+/)[0] : 0;
	notes = notes ? notes.innerText.match(/^\d+/)[0] : 0;
	watches = watches ? watches.innerText.match(/^\d+/)[0] : 0;



	var count;
	if (notificationData.privateMessage < notes) {
		count = notes - notificationData.privateMessage;
		notificationType.note(count);
	}
	if (notificationData.comment < comments) {
		count = comments - notificationData.comment;
		notificationType.comment(count);
	}
	if (notificationData.watch < watches) {
		count = watches - notificationData.watch;
		notificationType.watch(count);
	}

	saveData("FA_Notification",{pivateMessage : notes, comment : comments, watch : watches});

	setTimeout(function(){
		getPage(Settings.url, checkNotifications);
	}, Settings.interval);
}

function allowNotifications() {
  var notification = window.Notification;
  if (notification.permission != "granted") {
    notification.requestPermission().then(function(permission) {
      if (permission == "granted") {
        getPage(Settings.url, checkNotifications);
      }
    });
  } else {
    getPage(Settings.url, checkNotifications);
  }
}

allowNotifications();
