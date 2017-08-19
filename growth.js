var output = [];
var fs= require('fs');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('Table_1.3.csv')
});

lineReader.on('line', function (line) {
  var jsonLine = {};
  var lineSplit = line.split(',');
  
   jsonLine.CountryName=lineSplit[0];
   jsonLine.PopulationGrowth=lineSplit[5]-lineSplit[2];

   
   

   if (jsonLine.CountryName =='European Union' || jsonLine.CountryName == 'Country Name' || jsonLine.CountryName =='World' ) {
    }
else{
    output.push(jsonLine);


}

});

lineReader.on('close', function (line) {
    console.log(output);  
    var json = JSON.stringify(output, null, 2);
    fs.writeFileSync('populationGrowth.json',json);
});



//for GDP
var output1 = [];
lineReader.on('line', function (line) {
  var json = {};
  var lineSplit = line.split(',');
  
   json.CountryName=lineSplit[0];
   json.PurchasingPowerGrowth=lineSplit[8]-lineSplit[11];
  


   if (json.CountryName =='European Union' || json.CountryName == 'Country Name' || json.CountryName =='World') {
    }
else{
    output1.push(json);
}
});

lineReader.on('close', function (line) {
    console.log(output1); 
    var json = JSON.stringify(output1, null, 2);
    fs.writeFileSync('powerByCountryGrowth.json',json); 
});

