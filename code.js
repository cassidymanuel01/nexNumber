const numbers = [1, 2, 3];
  const iterator = numbers.values();
  let one = iterator.next().value;
  let two = iterator.next().value;
console.log(one);
console.log(two);