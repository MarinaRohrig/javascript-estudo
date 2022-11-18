const arr = ['said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you?'];
const [vall, val2, val3,...rest] = arr;

console.log(rest);
console.log(...rest);

// Hi Said How are you?