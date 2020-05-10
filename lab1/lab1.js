const questionOne = function questionOne(arr) {
    var x = arr[0];
    var y = arr[1];
    var z = arr[2];

    var res = (x*x) + (y*y) + (z*z);

    return res; 
}

const questionTwo = function questionTwo(num) { 
    if (num==0 || num==1)
    {
        return 1;
    }
    else
    {
        var a=0;
        var b=1;
        var res2;
        var i;
        for(i=2;i<=num;i++)
        {
            res2=a+b;
            a=b;
            b=res2;
        }
        return res2;
    }
}

const questionThree = function questionThree(text) {
    var strArr = text.split("");
    var i;
    var count = 0;
    for(i=0;i<strArr.length;i++)
    {
        if(strArr[i]=="A" || strArr[i]=="a" || strArr[i]=="E" || strArr[i]=="e" || strArr[i]=="I" || strArr[i]=="i" || strArr[i]=="O" || strArr[i]=="o" || strArr[i]=="U" || strArr[i]=="u")
        {
            count++;
        }
        
    }
    if (count==0)
    {
        return "No vowels found!"
    }
    else
    {
            return count;
    }
    
}

const questionFour = function questionFour(num) {
    if (num<0)
    {
        return NaN;
    }
    else if (num==0 || num==1)
    {
        return 1;
    }
    else
    {
        var fact=num;
        for(var j=num-1;j>1;j--)
        {
            fact=fact*j;
        }
        return fact;
    }
}

module.exports = {
    firstName: "Viraj", 
    lastName: "Rokade", 
    studentId: "10446730",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};