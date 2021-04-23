function solve(input) {
  let iterator = input[Symbol.iterator]();
  let char = iterator.next();
  let output = '';

  while(!char.done) {
      if (char.value !== ' ') {
          output += char.value;
          char = iterator.next();
      } else {
          output += '\n';
          char = iterator.next();
      }
  }

  console.log(output);
}

solve('da ti mamata');