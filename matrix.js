"use strict"
let arr=[[1,3,5],[2,4,8],[1,2,3]];
function matrix (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i===j){
                sum+=arr[i][j]
            }
        }
    }
    return sum
    
    

};
console.log(matrix(arr));