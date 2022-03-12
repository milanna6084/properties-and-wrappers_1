import orderByProps from '../app';

const objTest = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const sortOrderTest = ['name', 'level'];


test('function orderBy props should sorting properties by object at first in sortOrder order than in alphabet ', () => {
  const result = orderByProps(objTest, sortOrderTest);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(expected).toEqual(result);
});
