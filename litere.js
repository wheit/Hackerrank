//'use strict'
var nr=0;
var cuvant="abbac";
function litere(){
    for(litera in cuvant){
        console.log(cuvant[litera]);
        if(cuvant[litera]==="b"){
            nr++;
        }
    }
    return nr;
    
}
console.log(litere());