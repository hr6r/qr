$(function() {
			$('[name=qr-btn]').live('click', function() {
						var $btn = $(this);
						var qr = {
							'title' : $btn.text() + ' since '
									+ _format(new Date()),
							'ms' : $btn.data('ms')
						};
						chrome.extension.getBackgroundPage()._qr(qr);
						window.close();
					});
		});

function _format(date) {
	var mm = date.getMinutes();
	if (mm < 10) {
		mm = '0' + mm;
	}
	return date.getHours() + ':' + mm;
}