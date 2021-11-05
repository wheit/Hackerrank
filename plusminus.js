"use strict"
let arr=[1,-1,0,1,2];
function plusMinus(arr){
    let sumPoz=0;
    let sumNeg=0;
    let sumNull=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sumPoz++;
        }else if(arr[i]===0){
            sumNull++;
        }else if(arr[i]<1){
            sumNeg++;
        };
    };
    let ratio=[(sumNeg/arr.length).toFixed(4),(sumNull/arr.length).toFixed(4),(sumPoz/arr.length).toFixed(4)]
    console.log(ratio);

};
plusMinus(arr)