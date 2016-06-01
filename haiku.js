var fs = require('fs');
var dict =fs.readFileSync('./cmudict.txt', "utf8");
var lines = 3;
var syll =[[5],[7],[5]];
var poem =[];
var dictArray =  dict.split(/\n/);
var wordCount = dictArray.length;


function setStructure() {
	for (i=0;i<lines;i++) {
		var perWord = 0;
		var count = syll[i][0];
		do {
			perWord=Math.floor(Math.random()*count)+1;
			syll[i].push(perWord);
			count-=perWord;
		} while (count>0)
		poem.push([]);	
	}
}

/* if the dictionary could return no results (eg user input requests 100 syllable word), 
need a marker to indicate the loop is back to start. Edge case.*/
function parseWord(line, target){
	var result = [];
	do {
		result = dictArray[line].search(/[A-Z]\d/g); 
		if (result.length == target) {
			return dictArray[line].match(/\w+/);
		}
		else if (line==wordCount) {line = 1;}
		else {line++;}
	}
	while (result.length !== target) 

}

function generatePoem (syllArray){
	for (var i = 0; i < syllArray.length; i++) {
		for (var j=1; j<syllArray[i].length; j++){
			var startPoint = Math.floor(Math.random()*wordCount)+1;	
			poem[i].push(parseWord(startPoint,syllArray[i][j]));
		}
		poem[i]=poem[i].join(' ');
	}
	return poem.join('\n');
}
