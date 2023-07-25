require('./async');

class MyMath {
  static sum(num1, num2) {
    return num1 + num2;
  }
}

console.log('math');

// экспорт esModules
// export default MyMath; // по умолчанию
// export {MyMath}; // именной

// экспорт commonJS
// module.exports = MyMath; // по умолчанию
module.exports.MyMath = MyMath; // именной