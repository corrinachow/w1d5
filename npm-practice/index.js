var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

const x = chalk.bgRgb(15, 100, 204).inverse('Hello!')
const y = chalk.hex('#DEADED').underline('Hello, world!')

console.log(x)
console.log(y)

function sum(a, b) {
  if (a && b) {
    return chalk.rgb(255,255,255)(a + b);
  } else {
    return error('No b value')
  }
}
