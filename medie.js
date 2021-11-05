const array =[1,2,3,4,5];
let medie=0;
// for(numar in array){
//     medie=medie+array[numar];

// }
// medie=medie/array.length;
// console.log (medie);
function suma(){
    for (numar in array)
        medie=medie+array[numar];
        medie=medie/array.length;


}
medie=medie/array.length;
suma();
console.log(medie)