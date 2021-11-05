function endCorona(recovers,newCases,activeCases){
    let days=0
    days=Math.round(activeCases/(recovers-newCases));
    return days
}
console.log (endCorona(3000, 2000, 50699))