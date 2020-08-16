function sleep(milliseconds) {
    var start = new Date().getTime();
    let isDone = false;
    while(!boo){
        if ((new Date().getTime() - start) > milliseconds){
            isDone = true;
        }
    }
    return isDone;
}
sleep(2000);
console.log('Done');