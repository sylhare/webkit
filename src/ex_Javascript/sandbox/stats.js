function processData(input) {
  input = input.split("\n")[1].split(" ").map(x => Number(x));
  var values = input.sort((a, b) => a - b);

  // Mean
  console.log(input.reduce((a, b) => a + b, 0) / input.length);

  var half = Math.floor(values.length / 2);

  // Median
  if (values.length % 2)
    console.log(half);
  else
    console.log((values[half - 1] + values[half]) / 2.0);


  // Smallest
  console.log(values[0])
}
