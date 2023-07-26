const { User } = require('../models');

module.exports.createUser = async (req, res) => {
  /*
    1. распарсить JSON данные
    2. проверить их на корректность
    3. сохранить нового юзера (при этом подкинуть ему id)
    3.5 ОПЦИОНАЛЬНО создать сессию
    4. Отправить данные на клиент
  */
  const { user: userData } = req;

  const user = await User.create(userData);

  res.send(user);
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};
