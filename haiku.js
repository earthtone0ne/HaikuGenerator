var hg = require('./haiku_generator');

var argNum = process.argv.length;
var syllArray = [];

if (argNum ==2) {syllArray= [[5],[7],[5]];}
	
	else {for (var i=2;i<argNum;i++) {
			syllArray.push([process.argv[i]]);
		}
	}


hg.generatePoem(syllArray);
