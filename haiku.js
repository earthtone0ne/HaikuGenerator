console.log("starting..");
var fs = require('js');
var dict =fs.readFileSync('./cmudict.txt');
var lines = 3;
var syll =[[5],[7],[5]];
var poem =[];

function setStructure() {
	for (i=0;i<lines;i++) {
		var perWord = 0;
		var count = syll[i][0];
		do {
			perWord=Math.floor(Math.random()*count)+1;
			syll[i].push(perWord);
			count-=perWord;
		} while (count>0)
	}
}
