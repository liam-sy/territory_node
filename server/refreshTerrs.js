const fs = require("fs");

const refreshTerrs = async () => {
    let data = await fetch('http://192.168.0.67:5000/territories/update/')

    // //sorter
    //     function sortByKey(jsObj){
    //         var sortedArray = [];
        
    //         // Push each JSON Object entry in array by [key, value]
    //         for(var i in jsObj)
    //         {
    //             sortedArray.push([i, list[i]]);
    //         }
        
    //         // Run native sort function and returns sorted array.
    //         return sortedArray.sort();
    //     }

    fs.writeFile("terr.csv", data, (err) => {
        if (err) { console.log(err); }
    });

    // //sorting attempt
    //     var input = JSON.stringify(dbTerrIDName.rows, null, 4);
    //     var sortedbyKeyJSONArray = sortByKey(input);
    //     console.log(sortedbyKeyJSONArray)
    //     var newInput = JSON.stringify(sortedbyKeyJSONArray.rows, null, 4);
};

refreshTerrs();