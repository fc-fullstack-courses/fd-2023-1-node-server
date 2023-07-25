// fetch('https://randomuser.me/api')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {});

// function test1() {
//   return Promise.resolve('data');
// }

// const p1 = test1();

// console.log(p1);
// p1.then((data) => console.log(data));

// async function test2() {
//   return 'data';
// }

// const p2 = test2();

// console.log(p2);
// p2.then((data) => console.log(data));

function getUsers1() {
  return fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => data.results);
}

// const usersPromise1 = getUsers1();
// usersPromise1.then((users) => console.log(users));

async function getUsers2() {
  const promise1 = fetch('https://randomuser.me/api');

  const response = await promise1;

  const promise2 = response.json();
  const data = await promise2;

  return data.results;
}

// const usersPromise2 = getUsers2();
// usersPromise2.then((users) => console.log(users));

async function getUsers3() {
  const response = await fetch('https://randomuser.me/api');

  const data = await response.json();

  return data.results;
}

async function printUsers() {
  const users = await getUsers3();

  console.log(users);
}

// printUsers();

class Test {
  async testMethod() {}

  static async staticMethod() {}
}

const arrowFunc = async () => {};

async function errorExample() {
  try {
    const number = Math.random();

    if (number > 0.5) {
      throw new Error('Error happened');
    }

    console.log('success');
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('finally');
  }
}

// errorExample();
const users = await getUsers3();
console.log(users);

/*
Написать асинхронную функцию которая будет возвращать массив всех js примитивных данных

Получить значение из функции выше без использования метода then

Переделать функцию в апи на асинхронную

*/

async function task1() {
  return ['adkjsadsa', 10, true, null, undefined, 1000n, Symbol()];
}

// const arr = await task1();
// console.log(arr);

async function task2() {
  const arr = await task1();
  console.log(arr);
}

task2();