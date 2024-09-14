function countOccurrences(input, query) {
  return query.map(word => input.filter(item => item === word).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(countOccurrences(INPUT, QUERY)); // Output: [1, 0, 2]
