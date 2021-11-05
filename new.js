function triplets(arr1,arr2){
    let arr1Score=0;
    let arr2Score=0;
    let result=[];
    for(i=0;i<3;i++){
    if(arr1[i]>arr2[i]){
        arr1Score++

    }else{
        arr2Score++
    };
    }
    console.log(arr1Score,arr2Score)
    result.push(arr1Score,arr2Score);
};
triplets([6,2,3],[4,5,7])
