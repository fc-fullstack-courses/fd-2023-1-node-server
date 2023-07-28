const createHttpError = require('http-errors');
const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { user: userData, file } = req;

    const user = await User.create({ ...userData, imagePath: file.filename });

    /*
    {
      "fieldname": "avatar",  // название поля файла
      "originalname": "small-cat.png", // название файла который загружался
      "encoding": "7bit", // кодировка файла
      "mimetype": "image/png", // MIME-тип файла
      "destination": "uploads/", // куда файл сохранился
      // название сохраненного файла
      "filename": "af24f444f3a459d4492643c3955a61fd", 
      // полный путь к файлу
      "path": "uploads/af24f444f3a459d4492643c3955a61fd", 
      "size": 49911 // размер файла
    }
    */

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

    if (!user) {
      const error = createHttpError(404, 'User not found');
      return next(error);
    }

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
