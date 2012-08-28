function _qr(qr) {
	var timer = setTimeout(function() {
				var notification = webkitNotifications.createNotification(
						'32.png', qr.title, '');
				notification.show();
				_minusCount();
				clearInterval(timer);
			}, qr.ms);
	_plusCount();
}

function _plusCount() {
	chrome.browserAction.getBadgeText({}, function(r) {
				var c = 0;
				if ('' != r) {
					c = parseInt(r);
				}
				c += 1;
				chrome.browserAction.setBadgeText({
							'text' : c.toString()
						});
			});
}

function _minusCount() {
	chrome.browserAction.getBadgeText({}, function(r) {
				var c = parseInt(r);
				c -= 1;
				chrome.browserAction.setBadgeText({
							'text' : c.toString()
						});
			});
}