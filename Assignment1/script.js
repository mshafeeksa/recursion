const fibsRec = (x,opArray = [])=>{
    if (x > 0) {
        if (opArray.length < 2) {
            opArray.push(1);
            return fibsRec(x - 1, opArray);
        }
        else
            opArray.push(opArray[opArray.length - 1] + opArray[opArray.length - 2]);
            return fibsRec(x - 1, opArray);
    }
    else
        return opArray;
}

console.log(fibsRec(8));
