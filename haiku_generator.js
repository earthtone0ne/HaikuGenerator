var fs = require('fs');
var dict =fs.readFileSync('./cmudict.txt', "utf8");
//var dict ="ONG  AO1 NG\nONGOING  AA1 N G OW2 IH0 NG\nONGOING(1)  AO1 N G OW2 IH0 NG\nONGPIN  AO1 NG P IH0 N\nONION  AH1 N Y AH0 N\nONIONS  AH1 N Y AH0 N Z\nONISHI  OW0 N IY1 SH IY0\nONKEN  AA1 NG K AH0 N\nONLEY  AA1 N L IY0\nONLINE  AO1 N L AY2 N\nONLINE'S  AO1 N L AY2 N Z\nONLOOKER  AO1 N L UH2 K ER0\nONLOOKERS  AO1 N L UH2 K ER0 Z\nONLY  OW1 N L IY0\nONNEN  AA1 N AH0 N\nONNI  AA1 N IY0\nONNO  AA1 N OW0\nONO  OW1 N OW0\nONODA  OW0 N OW1 D AH0\nONOFRE  OW0 N AO1 F R IY0\nONOFRIO  OW0 N OW1 F R IY0 OW0\nONOMASTIC  AA2 N AH0 M AE1 S T IH0 K\nONOMASTICS  AA2 N AH0 M AE1 S T IH0 K S\nONOMATOPEIA  AA2 N AH0 M AE0 T AH0 P IY1 AH0\nONOMATOPEIAING  AA2 N AH0 M AE0 T AH0 P IY1 AH0 ING0";
var poem =[];
var dictArray =  dict.split(/\n/);
var wordCount = dictArray.length;

function setStructure(syll) {
	for (var i=0;i<syll.length;i++) {
		var perWord = 0;
		var count = syll[i][0];
		do {
			perWord=Math.floor(Math.random()*count)+1;
			syll[i].push(perWord);
			count-=perWord;
		} while (count>0)
	}
	return syll;
}

/* if the dictionary could return no results (eg user input requests 100 syllable word), 
need a marker to indicate the loop is back to start. Edge case.*/
function parseWord(line, target){

	var result = [];
	do {
		result = dictArray[line].match(/[A-Z]\d/g) || []; 
		//console.log(dictArray[line] + " - " + result + "-->"+ result.length + "/" + target);
		if (result.length == target) {
			return dictArray[line].match(/[A-Z'\-\.]+/)[0];
		}
		else if (line==wordCount-1) {line = 0;}
		else {line++;}
	}
	while (result.length !== target) 

}

function generatePoem (syll){
	var syllArray = setStructure(syll);
	for (var i = 0; i < syllArray.length; i++) {
		poem.push([""]);
		for (var j=1; j<syllArray[i].length; j++){
			var startPoint = Math.floor(Math.random()*wordCount)+1;	
			poem[i]+=parseWord(startPoint,syllArray[i][j])+ " ";
			
		}
		//poem[i]=poem[i].join(' ');
	}
	console.log(poem.join("\n"));
	return poem.join("\n");
}

module.exports={parseWord: parseWord, generatePoem:generatePoem,setStructure:setStructure}