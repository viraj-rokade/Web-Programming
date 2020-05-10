const questionOne = function questionOne(arr) {

    let sum =0;
    for(let i=0;i<arr.length;i++)
    {
        let elementSquare =  arr[i]*arr[i];
        sum = sum + elementSquare;
    }

    return sum; 
}

const questionTwo = function questionTwo(num) { 
    if(num<1)
    {
        return 0;
    }
    else if (num==1)
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

    if(text)
    {
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
            return 0;
        }
        else
        {
            return count;
        }
    }
    else
    {
        return 0;
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
    studentId: "YOUR_ID",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
