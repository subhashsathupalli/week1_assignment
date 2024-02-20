let fheat= 97;
let cheat= 36;

function f()
{
    let c= (fheat-32) * (5/9);
    return c;
}

function c()
{
    let f= ((9/5) * cheat) + 32;
    return f;
}

console.log("value in fahrenheit",  c());
console.log("value in celsius", f());
