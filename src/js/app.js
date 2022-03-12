// TODO: write your code here

const player = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const sortOrderArray = ['name', 'level'];

export default function orderByProps(obj, sortOrder) {
  const objArray = [];
  const sortedArray = [];


  for (const param in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, param)) {
      objArray.push({ key: param, value: obj[param] });
    } 
  }

  sortOrder.forEach((element) => {
    objArray.forEach((item, index) => {
      if (item.key === element) {
        sortedArray.push(item);
        objArray.splice(index, 1);
      }
    });
  });

  objArray.sort((a, b) => {
    if (a.key > b.key) return 1;
    return -1;
  });

  return sortedArray.concat(objArray);
}

orderByProps(player, sortOrderArray);
// console.log(orderByProps(player, sortOrderArray));
