Function.prototype.myCall = function (thisContext, ...args) {
    const uniqueSymbol = Symbol();
    thisContext[uniqueSymbol] = this;
    const result = thisContext[uniqueSymbol](...args);
    delete thisContext[uniqueSymbol];
    return result;
}

Function.prototype.myApply = function (thisContext, args = []) {
    const uniqueSymbol = Symbol();
    thisContext[uniqueSymbol] = this;
    const result = thisContext[uniqueSymbol](...args);
    delete thisContext[uniqueSymbol];
    return result;
};

Function.prototype.myBind = function (thisContext, ...boundArgs) {
    return (...args) => {
        const uniqueSymbol = Symbol();
        thisContext[uniqueSymbol] = this;
        const result = thisContext[uniqueSymbol](...boundArgs, ...args);
        delete thisContext[uniqueSymbol];
        return result;
    }
};

const obj = {
    num: 0
};
function logNums(x, y) {
    console.log(this.num, x, y);
}

logNums.myCall(obj, 1, 2);
logNums.myApply(obj, [1, 2]);

const boundFunc = logNums.myBind(obj, 3);
boundFunc(5);