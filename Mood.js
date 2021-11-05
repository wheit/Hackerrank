

function today(moodToday){
    if(moodToday===undefined){
        return  "Today, I am feeling neutral.";
    }
    else {
        return  "Today, I am feeling "+" "+  moodToday ;
    }


    }
    console.log(today ("happy"))
        