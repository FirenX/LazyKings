function getSaveObject() {
	var a = [];
	a.version = version;
	a.gsbuffer = gsbuffer;
	return Base64.encode(JSON.stringify(a))
}