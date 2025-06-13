function definedSomeValues(a, b, c) {
    a++;
    b = "new string";
    c["key"] = "new value";
}


var a = 1,
    b = "old string",
    c = {"key": "old value"};

definedSomeValues(a, b, c);
console.log(a);
console.log(b);
console.log(c);

/* outputs
1
old string
{ key: 'new value' }
*/
