var output = [];
var fs= require('fs');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('Table_1.3.csv')
});
lineReader.on('line', function (line) {
  var jsonLine = {};
  var lineSplit = line.split(',');
   jsonLine.CountryName=lineSplit[0];
   jsonLine.PopulationGrowth2010=parseFloat(lineSplit[2]);
   jsonLine.PopulationGrowth2013=parseFloat(lineSplit[5]);
   if (jsonLine.CountryName =='European Union' || jsonLine.CountryName == 'Country Name' || jsonLine.CountryName =='World' ) {
    }
else{
    output.push(jsonLine);
  }
});
lineReader.on('close', function (line) {
    console.log(output);  
    var json = JSON.stringify(output, null, 2);
    fs.writeFileSync('growthPopulation.json',json);
});
