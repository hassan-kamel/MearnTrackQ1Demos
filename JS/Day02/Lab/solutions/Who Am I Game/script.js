var creatures = [
  {
    name: 'Eagle',
    fly: true,
    wild: true,
    underSea: false,
  },
  {
    name: 'Parrot',
    fly: true,
    wild: false,
    underSea: false,
  },
  {
    name: 'Shark',
    fly: false,
    wild: true,
    underSea: true,
  },
  {
    name: 'Dolphin',
    fly: false,
    wild: false,
    underSea: true,
  },
  {
    name: 'Lion',
    fly: false,
    wild: true,
    underSea: false,
  },
  {
    name: 'Cat',
    fly: false,
    wild: false,
    underSea: false,
  },
];

var fly = confirm('Do you fly ?');

var underSea = !fly && confirm('Do you live under the sea ?');

var wild = confirm('Are you wild ?');

console.log({ fly, underSea, wild });

for (var index = 0; index < creatures.length; index++) {
  if (
    creatures[index].fly === fly &&
    creatures[index].underSea === underSea &&
    creatures[index].wild === wild
  )
    alert(creatures[index].name);
}
