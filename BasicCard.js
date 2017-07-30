
exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

exports.ClozeCard = function(text, cloze) {
	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not appear within text --' + cloze);
		return;
	}

	

