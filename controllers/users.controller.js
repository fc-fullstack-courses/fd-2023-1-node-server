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

module.exports.getUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  const user = await User.findById(+userId);

  res.send(user);
};

module.exports.getUserQuery = async (req, res, next) => {
  const {
    query: { id }, // содержит все данные, которы идут в урле после ?
  } = req; 

  const user = await User.findById(+id);

  res.send(user);
};

module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  const deletedUser = await User.deleteById(+userId);

  res.send(deletedUser);
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;

  const updatedUser = await User.updateById(+userId, body);

  res.send(updatedUser);
};
