let counter = 0;
const array = [];

loop();

function loop() {
  array.push(counter);
  counter++;
  console.log(array);
  setTimeout(loop, 1000);
}
