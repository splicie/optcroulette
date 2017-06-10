var dbResponse = null;

function getDB () {
	dbResponse = this.responseText;
}

var req = new XMLHttpRequest();
req.addEventListener("load", getDB);
req.open("GET", "https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/common/data/units.js", false);
req.send();

var typeSelection = [0,0,0,0,0];
var classSelection = [0,0,0,0,0,0,0,0];
var randArr = [];

var cleanedText = [0];

window.onload = function() {
	var rawText = dbResponse.split('\n');
	var cleanTest = /\[.*]./
	
	for (var i = 0; i < rawText.length; i++) {
		if (rawText[i].indexOf('//') > -1) {
			continue;
		}
		
		if (!cleanTest.test(rawText[i])) {
			continue;
		}
		else {
			cleanedText.push(rawText[i]);
		}
	}
	
	// Event Handlers
	// HARD HAT REQUIRED UNDER DOTTED LINE; CANNOT GUARANTEE SAFETY PASSED THIS POINT
	// ------------------------------------------------------------------------------
	var strButton = document.getElementById('str');
	strButton.onclick = function() {
		if (typeSelection[0] == 0) {
			typeSelection[0] = 1;
			strButton.style.opacity = 1;
		} else {
			typeSelection[0] = 0;
			strButton.style.opacity = .4;
		}
	};
	strButton.onmouseenter = function() {
		strButton.style.opacity = 1;
	};
	strButton.onmouseout = function() {
		if (typeSelection[0] == 1) {
			return;
		}
		strButton.style.opacity = .4;
	};
	var dexButton = document.getElementById('dex');
	dexButton.onclick = function() {
		if (typeSelection[1] == 0) {
			typeSelection[1] = 1;
			dexButton.style.opacity = 1;
		} else {
			typeSelection[1] = 0;
			dexButton.style.opacity = .4;
		}
	};
	dexButton.onmouseenter = function() {
		dexButton.style.opacity = 1;
	};
	dexButton.onmouseout = function() {
		if (typeSelection[1] == 1) {
			return;
		}
		dexButton.style.opacity = .4;
	};
	var qckButton = document.getElementById('qck');
	qckButton.onclick = function() {
		if (typeSelection[2] == 0) {
			typeSelection[2] = 1;
			qckButton.style.opacity = 1;
		} else {
			typeSelection[2] = 0;
			qckButton.style.opacity = .4;
		}
	};
	qckButton.onmouseenter = function() {
		qckButton.style.opacity = 1;
	};
	qckButton.onmouseout = function() {
		if (typeSelection[2] == 1) {
			return;
		}
		qckButton.style.opacity = .4;
	};
	var psyButton = document.getElementById('psy');
	psyButton.onclick = function() {
		if (typeSelection[3] == 0) {
			typeSelection[3] = 1;
			psyButton.style.opacity = 1;
		} else {
			typeSelection[3] = 0;
			psyButton.style.opacity = .4;
		}
	};
	psyButton.onmouseenter = function() {
		psyButton.style.opacity = 1;
	};
	psyButton.onmouseout = function() {
		if (typeSelection[3] == 1) {
			return;
		}
		psyButton.style.opacity = .4;
	};
	var intButton = document.getElementById('int');
	intButton.onclick = function() {
		if (typeSelection[4] == 0) {
			typeSelection[4] = 1;
			intButton.style.opacity = 1;
		} else {
			typeSelection[4] = 0;
			intButton.style.opacity = .4;
		}
	};
	intButton.onmouseenter = function() {
		intButton.style.opacity = 1;
	};
	intButton.onmouseout = function() {
		if (typeSelection[4] == 1) {
			return;
		}
		intButton.style.opacity = .4;
	};
	var fighterButton = document.getElementById('fighter');
	fighterButton.onclick = function() {
		if (classSelection[0] == 0) {
			classSelection[0] = 1;
			fighterButton.style.opacity = 1;
		} else {
			classSelection[0] = 0;
			fighterButton.style.opacity = .4;
		}
	};
	fighterButton.onmouseenter = function() {
		fighterButton.style.opacity = 1;
	};
	fighterButton.onmouseout = function() {
		if (classSelection[0] == 1) {
			return;
		}
		fighterButton.style.opacity = .4;
	};
	var slasherButton = document.getElementById('slasher');
	slasherButton.onclick = function() {
		if (classSelection[1] == 0) {
			classSelection[1] = 1;
			slasherButton.style.opacity = 1;
		} else {
			classSelection[1] = 0;
			slasherButton.style.opacity = .4;
		}
	};
	slasherButton.onmouseenter = function() {
		slasherButton.style.opacity = 1;
	};
	slasherButton.onmouseout = function() {
		if (classSelection[1] == 1) {
			return;
		}
		slasherButton.style.opacity = .4;
	};
	var strikerButton = document.getElementById('striker');
	strikerButton.onclick = function() {
		if (classSelection[2] == 0) {
			classSelection[2] = 1;
			strikerButton.style.opacity = 1;
		} else {
			classSelection[2] = 0;
			strikerButton.style.opacity = .4;
		}
	};
	strikerButton.onmouseenter = function() {
		strikerButton.style.opacity = 1;
	};
	strikerButton.onmouseout = function() {
		if (classSelection[2] == 1) {
			return;
		}
		strikerButton.style.opacity = .4;
	};
	var shooterButton = document.getElementById('shooter');
	shooterButton.onclick = function() {
		if (classSelection[3] == 0) {
			classSelection[3] = 1;
			shooterButton.style.opacity = 1;
		} else {
			classSelection[3] = 0;
			shooterButton.style.opacity = .4;
		}
	};
	shooterButton.onmouseenter = function() {
		shooterButton.style.opacity = 1;
	};
	shooterButton.onmouseout = function() {
		if (classSelection[3] == 1) {
			return;
		}
		shooterButton.style.opacity = .4;
	};
	var free_spiritButton = document.getElementById('free_spirit');
	free_spiritButton.onclick = function() {
		if (classSelection[4] == 0) {
			classSelection[4] = 1;
			free_spiritButton.style.opacity = 1;
		} else {
			classSelection[4] = 0;
			free_spiritButton.style.opacity = .4;
		}
	};
	free_spiritButton.onmouseenter = function() {
		free_spiritButton.style.opacity = 1;
	};
	free_spiritButton.onmouseout = function() {
		if (classSelection[4] == 1) {
			return;
		}
		free_spiritButton.style.opacity = .4;
	};
	var drivenButton = document.getElementById('driven');
	drivenButton.onclick = function() {
		if (classSelection[5] == 0) {
			classSelection[5] = 1;
			drivenButton.style.opacity = 1;
		} else {
			classSelection[5] = 0;
			drivenButton.style.opacity = .4;
		}
	};
	drivenButton.onmouseenter = function() {
		drivenButton.style.opacity = 1;
	};
	drivenButton.onmouseout = function() {
		if (classSelection[5] == 1) {
			return;
		}
		drivenButton.style.opacity = .4;
	};
	var cerebralButton = document.getElementById('cerebral');
	cerebralButton.onclick = function() {
		if (classSelection[6] == 0) {
			classSelection[6] = 1;
			cerebralButton.style.opacity = 1;
		} else {
			classSelection[6] = 0;
			cerebralButton.style.opacity = .4;
		}
	};
	cerebralButton.onmouseenter = function() {
		cerebralButton.style.opacity = 1;
	};
	cerebralButton.onmouseout = function() {
		if (classSelection[6] == 1) {
			return;
		}
		cerebralButton.style.opacity = .4;
	};
	var powerhouseButton = document.getElementById('powerhouse');
	powerhouseButton.onclick = function() {
		if (classSelection[7] == 0) {
			classSelection[7] = 1;
			powerhouseButton.style.opacity = 1;
		} else {
			classSelection[7] = 0;
			powerhouseButton.style.opacity = .4;
		}
	};
	powerhouseButton.onmouseenter = function() {
		powerhouseButton.style.opacity = 1;
	};
	powerhouseButton.onmouseout = function() {
		if (classSelection[7] == 1) {
			return;
		}
		powerhouseButton.style.opacity = .4;
	};
	var shuffleButton = document.getElementById('shuffleButton');
	shuffleButton.onclick = function() {
		var resultArea = document.getElementById('resultArea');
		if (resultArea.children.length <= 0) {
			for (var i = 0; i < 16; i++) {
				var randChar = document.createElement('div');
				randChar.id = 'char_' + i;
				randChar.className = 'randChar';
				randChar.refId = 0;
				resultArea.appendChild(randChar);
			}
		}
		getChars();
	};
}

function getChars() {
	// Filter here
	// Not for the weak of heart
	var typeTest = [];
	var classTest = []
		
	if (typeSelection.indexOf(1) > -1 && classSelection.indexOf(1) > -1) {
		for (var i = 0; i < typeSelection.length; i++) {
			if (typeSelection[i] == 0) {
				continue;
			} else {
				if (i == 0) {
					typeTest.push('("STR")');
				} else if (i == 1) {
					typeTest.push('("DEX")');
				} else if (i == 2) {
					typeTest.push('("QCK")');
				} else if (i == 3) {
					typeTest.push('("PSY")');
				} else if (i == 4) {
					typeTest.push('("INT")');
				}
			}
		}
		for (var i = 0; i < classSelection.length; i++) {
				if (classSelection[i] == 0) {
					continue;
				} else {
					if (i == 0) {
						classTest.push('("Fighter")');
					} else if (i == 1) {
						classTest.push('("Slasher")');
					} else if (i == 2) {
						classTest.push('("Striker")');
					} else if (i == 3) {
						classTest.push('("Shooter")');
					} else if (i == 4) {
						classTest.push('("Free Spirit")');
					} else if (i == 5) {
						classTest.push('("Driven")');
					} else if (i == 6) {
						classTest.push('("Cerebral")');
					} else if (i == 7) {
						classTest.push('("Powerhouse")');
					}
				}
			}
		randArr = [];
		
		for (var i = 0; i < 16; i++) {
			var typeRegexString = '';
			for (var n = 0; n < typeTest.length; n++) {
				if (n == 0) {
					typeRegexString = typeTest[n];
				} else {
					typeRegexString = typeRegexString + '|' + typeTest[n];
				}
			}
			var classRegexString = '';
			for (var n = 0; n < classTest.length; n++) {
				if (n == 0) {
					classRegexString = classTest[n];
				} else {
					classRegexString = classRegexString + '|' + classTest[n];
				}
			}
			var index = Math.floor(Math.random() * cleanedText.length) + 1;
			
			var pattern = new RegExp(typeRegexString);
			var classPattern = new RegExp(classRegexString);
			
			if (!pattern.test(cleanedText[index]) || !classPattern.test(cleanedText[index])) {
				while (!pattern.test(cleanedText[index]) || !classPattern.test(cleanedText[index])) {
					index = Math.floor(Math.random() * cleanedText.length);
					if (pattern.test(cleanedText[index]) && classPattern.test(cleanedText[index])) {
						randArr.push(index);
						if (index <= 9) {
							index = '000' + index;
						} else if (index >= 9 && index <= 99) {
							index = '00' + index;
						} else if (index >= 99 && index <= 999) {
							index = '0' + index;
						}
						
						var charI = document.getElementById("char_" + i);
						charI.refId = index;
						charI.style.backgroundImage = "url('https://onepiece-treasurecruise.com/wp-content/uploads/f" + index + ".png')";
						break;
					}
				}
			} else {
				randArr.push(index);					
				if (index <= 9) {
					index = '000' + index;
				} else if (index >= 9 && index <= 99) {
					index = '00' + index;
				} else if (index >= 99 && index <= 999) {
					index = '0' + index;
				}
				
				var charI = document.getElementById("char_" + i);
				charI.refId = index;
				charI.style.backgroundImage = "url('https://onepiece-treasurecruise.com/wp-content/uploads/f" + index + ".png')";
			}
		}
	}
	else {
		if (typeSelection.indexOf(1) > -1) {
			for (var i = 0; i < typeSelection.length; i++) {
				if (typeSelection[i] == 0) {
					continue;
				} else {
					if (i == 0) {
						typeTest.push('("STR")');
					} else if (i == 1) {
						typeTest.push('("DEX")');
					} else if (i == 2) {
						typeTest.push('("QCK")');
					} else if (i == 3) {
						typeTest.push('("PSY")');
					} else if (i == 4) {
						typeTest.push('("INT")');
					}
				}
			}
		}
		if (classSelection.indexOf(1) > -1) {
			for (var i = 0; i < classSelection.length; i++) {
				if (classSelection[i] == 0) {
					continue;
				} else {
					if (i == 0) {
						classTest.push('("Fighter")');
					} else if (i == 1) {
						classTest.push('("Slasher")');
					} else if (i == 2) {
						classTest.push('("Striker")');
					} else if (i == 3) {
						classTest.push('("Shooter")');
					} else if (i == 4) {
						classTest.push('("Free Spirit")');
					} else if (i == 5) {
						classTest.push('("Driven")');
					} else if (i == 6) {
						classTest.push('("Cerebral")');
					} else if (i == 7) {
						classTest.push('("Powerhouse")');
					}
				}
			}
		}
		
		randArr = [];
		for (var i = 0; i < 16; i++) {
			if (typeTest.length == 0 && classTest.length == 0) {
				var index = Math.floor(Math.random() * cleanedText.length) + 1;
				randArr.push(index);
				
				if (index <= 9) {
					index = '000' + index;
				} else if (index >= 9 && index <= 99) {
					index = '00' + index;
				} else if (index >= 99 && index <= 999) {
					index = '0' + index;
				}
				
				var charI = document.getElementById("char_" + i);
				charI.refId = index;
				charI.style.backgroundImage = "url('https://onepiece-treasurecruise.com/wp-content/uploads/f" + index + ".png')";
			} else {
				var typeRegexString = '';
				for (var n = 0; n < typeTest.length; n++) {
					if (n == 0) {
						typeRegexString = typeTest[n];
					} else {
						typeRegexString = typeRegexString + '|' + typeTest[n];
					}
				}
				for (var n = 0; n < classTest.length; n++) {
					if (n == 0 && typeRegexString == '') {
						typeRegexString = classTest[n];
					} else {
						typeRegexString = typeRegexString + '|' + classTest[n];
					}
				}
				var index = Math.floor(Math.random() * cleanedText.length) + 1;
				var pattern = new RegExp(typeRegexString);
				
				if (!pattern.test(cleanedText[index])) {
					while (!pattern.test(cleanedText[index])) {
						index = Math.floor(Math.random() * cleanedText.length);
						if (pattern.test(cleanedText[index])) {
							randArr.push(index);
							if (index <= 9) {
								index = '000' + index;
							} else if (index >= 9 && index <= 99) {
								index = '00' + index;
							} else if (index >= 99 && index <= 999) {
								index = '0' + index;
							}
							
							var charI = document.getElementById("char_" + i);
							charI.refId = index;
							charI.style.backgroundImage = "url('https://onepiece-treasurecruise.com/wp-content/uploads/f" + index + ".png')";
							break;
						}
					}
				} else {
					randArr.push(index);
					
					if (index <= 9) {
						index = '000' + index;
					} else if (index >= 9 && index <= 99) {
						index = '00' + index;
					} else if (index >= 99 && index <= 999) {
						index = '0' + index;
					}
					
					var charI = document.getElementById("char_" + i);
					charI.refId = index;
					charI.style.backgroundImage = "url('https://onepiece-treasurecruise.com/wp-content/uploads/f" + index + ".png')";
				}			
			}
		}
	}
	for (var i = 0; i < 16; i++) {
		var helpMe = document.getElementById('char_' + i);
		helpMe.addEventListener('click', function() {
			var id = this.refId;
			window.open('http://optc-db.github.io/characters/#/view/' + id);
		});
	}
}