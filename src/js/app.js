/* eslint-disable no-param-reassign */
export default function getArray(characterObject) {
  const result = [];
  const { special } = characterObject;
  if (!special) {
    return [];
  }

  special.forEach((item) => {
    if (!item.description) {
      item.description = 'Описание недоступно';
    }
    result.push({
      id: item.id,
      name: item.name,
      icon: item.icon,
      description: item.description,
    });
  });
  return result;
}

//   for (let i = 0; i < special.length; i += 1) {
//     if (!special[i].description) {
//       special[i].description = 'Описание недоступно';
//     }
//     result.push({
//       id: special[i].id,
//       name: special[i].name,
//       icon: special[i].icon,
//       description: special[i].description,
//     });
//   }

//   return result;
// }

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const character1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [],
};

const character2 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};

console.log(getArray(character));
console.log(getArray(character1));
console.log(getArray(character2));
