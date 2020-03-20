<
!DOCTYPE
html >
< html >
< body >

< script >
var fields = {
    "name": "andy",
    "age": null,
    "email": null,
    "status": true
};

var result = Object.entries(fields).reduce(
    (a, [key, val]) => {
        if (val)
            a[key] = val;
        return a;
    }
    , []);

var result2 = Object.entries(fields)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => ({1: key, 2: value}));

const output = Object.entries(fields)
    .reduce((a, [k, v]) => v !== null ? [...a, [k, v]] : a, [])

var test = Object.entries(fields)
    .filter(([key, value]) => value !== null)
    .reduce((obj, [k, v]) => ({...obj, [k]: v}), {})

console.log(result);
console.log(2)
console.log(result2);
console.log(3)
console.log(output)
console.log(4)
console.log(test)
< /script>

< /body>
< /html>
