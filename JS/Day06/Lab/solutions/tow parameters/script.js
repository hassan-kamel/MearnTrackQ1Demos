function onlyTowParameters() {
  if (arguments.length !== 2)
    throw 'Expected 2 Arguments you passed ' + arguments.length + ' Arguments';

  return arguments;
}
onlyTowParameters('hi', 'hello');
console.log(onlyTowParameters('hi', 'hello'));

onlyTowParameters('hi', 'hello', 1);
// onlyTowParameters('hi');
