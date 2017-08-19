var output = [];
var fs= require('fs');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('Table_1.3.csv')
});

lineReader.on('line', function (line) {
  var jsonFromLine = {};
 
  
   var lineSplit = line.split(',');
  

   jsonFromLine.CountryName=lineSplit[0];
   jsonFromLine.PowerByCountry=lineSplit[23];


   if (jsonFromLine.CountryName =='European Union' || jsonFromLine.CountryName == 'Country Name' || jsonFromLine.CountryName =='World') {
    }
else{
    output.push(jsonFromLine);
output.sort(function(a,b)
    {
        return b.PowerByCountry-a.PowerByCountry
    }


        );

}



});

lineReader.on('close', function (line) {
    console.log(output);  
    var json = JSON.stringify(output, null, 2);
    fs.writeFileSync('power.json',json);
});




///gdp
var output1 = [];
lineReader.on('line', function (line) {
  var jsonFromLine1 = {};
 
  
   var lineSplit = line.split(',');
  

   jsonFromLine1.CountryName=lineSplit[0];
   jsonFromLine1.GDP2013=lineSplit[11];


   if (jsonFromLine1.CountryName =='European Union' || jsonFromLine1.CountryName == 'Country Name' || jsonFromLine1.CountryName =='World') {
    }
else{
    output1.push(jsonFromLine1);
output1.sort(function(a,b)
    {
        return b.GDP2013-a.GDP2013
    }


        );

}



});

lineReader.on('close', function (line) {
    console.log(output1);  
 var json = JSON.stringify(output1, null, 2);
    fs.writeFileSync('GDP.json',json);
});


//population
var output2 = [];
lineReader.on('line', function (line) {
  var jsonFromLine2 = {};
 
  
   var lineSplit = line.split(',');
  

   jsonFromLine2.CountryName=lineSplit[0];
   jsonFromLine2.Population2013=lineSplit[5];

if (jsonFromLine2.CountryName =='European Union' || jsonFromLine2.CountryName == 'Country Name' || jsonFromLine2.CountryName =='World') {
    }
else{
    output2.push(jsonFromLine2);
output2.sort(function(a,b)
    {
        return b.Population2013-a.Population2013
    }


        );

}



});

lineReader.on('close', function (line) {
    console.log(output2);  
    var json = JSON.stringify(output2, null, 2);
    fs.writeFileSync('population.json',json);
});


