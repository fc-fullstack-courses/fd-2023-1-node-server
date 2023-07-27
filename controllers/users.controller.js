const { User } = require('../models');

module.exports.createUser = async (req, res) => {
  try {
    const { user: userData } = req;

    const user = await User.create(userData);

    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findById(+userId);

    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.getUserQuery = async (req, res, next) => {
  try {
    const {
      query: { id }, // содержит все данные, которы идут в урле после ?
    } = req;

    const user = await User.findById(+id);

    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const deletedUser = await User.deleteById(+userId);

    res.send(deletedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    const updatedUser = await User.updateById(+userId, body);

    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};
