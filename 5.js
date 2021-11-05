function fifth (array){
    if(array.length <5){
        console.log("Not enouff");
    }


    for (i in array){
              if(i==4){
                console.log(typeof array[i]);
        }
        
    }

        
}

fifth([1,2,3,4]);

