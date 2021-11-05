function fotbalPoints(win,draw,lose){
    let points=0;
    points=win*3+draw*1+lose*0;
    return points;
}


console.log(fotbalPoints(3,4,2));