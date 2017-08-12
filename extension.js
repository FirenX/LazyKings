function setTickRate(n) {
	clearInterval(interval1);
	interval1 = setInterval(updateh, 1000/n);
}

function resetWithout() {
	var i = 0;
	var j = 5;
	var k = 1;
	var temp0 = new bigInt();
	var temp1 = new bigInt();
	var temp2 = new bigInt();
	while (k <= j) {
		pullBig(temp0, (10000 * k) + 6500);
		if (getpowerBig(temp0)) {
			currentview = 99;
			addSmall(temp2, 1);
			temp1.data.fill(0);
			while (i < 10) {
				pullBig(temp0, (10000 * k) + 6500 + (100 * i));
				addBig(temp1, temp0);
				i++;
			}
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			i = 0;
			temp1.data.fill(0);
			while (i < 10) {
				pullBig(temp0, (10000 * k) + 7500 + (100 * i));
				if (compareBig(temp0, temp1)) {
					copyBig(temp1, temp0);
				}
				i++;
			}
			i = getpowerBig(temp1);
			if (i > 2) {
				addSmall(temp2, i - 2);
			}
			var l = 0;
			var m = 0;
			while (l < 6) {
				pullBig(temp1, 5000 + (100 * l) + (10000 * k));
				i = getpowerBig(temp1);
				if (k == 1) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 6;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 5;
					}
				} else if (k == 2) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 6;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 4;
					}
				} else if (k == 3) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 7;
					} else if (l == 2) {
						m = 7;
					} else if (l == 3) {
						m = 4;
					} else if (l == 4) {
						m = 6;
					} else if (l == 5) {
						m = 5;
					}
				} else if (k == 4) {
					if (l == 0) {
						m = 7;
					} else if (l == 1) {
						m = 5;
					} else if (l == 2) {
						m = 4;
					} else if (l == 3) {
						m = 7;
					} else if (l == 4) {
						m = 4;
					} else if (l == 5) {
						m = 4;
					}
				} else if (k == 5) {
					if (l == 0) {
						m = 8;
					} else if (l == 1) {
						m = 7;
					} else if (l == 2) {
						m = 6;
					} else if (l == 3) {
						m = 6;
					} else if (l == 4) {
						m = 5;
					} else if (l == 5) {
						m = 6;
					}
				}
				if (i > m) {
					addSmall(temp2, i - m);
				}
				l++;
			}
		}
		i = 0;
		while (i < 25) {
			subSmall(temp2, gameState[(10000 * k) + 1900 + i]);
			i++;
		}
		pushBig(temp2, (10000 * k) + 1800);
		temp2.data.fill(0);
		i = 0;
		k++;
	}
}

function getSaveObject() {
	var a = [];
	a.version = version;
	a.gsbuffer = gsbuffer;
	return Base64.encode(JSON.stringify(a));
}

var oldNewGame = newGame;
newGame = resetWithout;

setTickRate(10);