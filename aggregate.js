var output = [];
var output1 = [];
var output2 = [];
flag1=0;
count=0;
count1=0;
count2=0;
flag2=0;
flag3=0;
count3=0;
count4=0;
flag4=0;
var fs= require('fs');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('Table_1.3.csv')
});

lineReader.on('line', function (line) {
  var jsonLine = {};
  var jsonFromLine = {};
  var lineSplit = line.split(',');
 



 
    jsonFromLine.CountryName = lineSplit[0];

    if (jsonFromLine.CountryName == 'World' || jsonFromLine.CountryName == 'European Union') {
 
    } else if(jsonFromLine.CountryName=='Australia') {
        count=count+lineSplit[5];
        jsonLine.Continent="Australia"
        jsonLine.Population_2013=count;
       
}

else if(jsonFromLine.CountryName=='United Kingdom' || jsonFromLine.CountryName=='France' || jsonFromLine.CountryName=='Russia'||jsonFromLine.CountryName=='Turkey' ) {
        count2=count2-(-lineSplit[5]);
        flag2++;
        if(flag2==4){
            jsonLine.Continent="European";
             jsonLine.Population_2013=count2;
 
        }
    }
    else if(jsonFromLine.CountryName=='Argentina' || jsonFromLine.CountryName=='Brazil') {
        count1=count1-(-lineSplit[5]);
        flag1++;
        if(flag1==2){
            jsonLine.Continent="South America";
             jsonLine.Population_2013=count1;
 
        }
 
}
        else if(jsonFromLine.CountryName=='China' || jsonFromLine.CountryName=='India' || jsonFromLine.CountryName=='Indonesia'||jsonFromLine.CountryName=='Japan'||jsonFromLine.CountryName=='Saudi Arabia'||jsonFromLine.CountryName=='Republic of Korea' ) {
        count3=count3-(-lineSplit[5]);
        flag3++;
        if(flag3==6){
            jsonLine.Continent="Asia";
             jsonLine.Population_2013=count3;
 
        }
    }

else if(jsonFromLine.CountryName=='South Africa' ) {
        jsonLine.Continent="Africa"
        jsonLine.Population_2013=lineSplit[5];
    }
 else if(jsonFromLine.CountryName=='Mexico' || jsonFromLine.CountryName=='USA'  ) {
        count4=count4-(-lineSplit[5]);
        flag4++;
        if(flag4==2){
            jsonLine.Continent="North America";
             jsonLine.Population_2013=count4;
 
        }
    }
output.push(jsonLine );


 

});

lineReader.on('close', function (line) {
    console.log(output);  
    var json = JSON.stringify(output, null, 2);
    fs.writeFileSync('aggregate.json',json);
});

