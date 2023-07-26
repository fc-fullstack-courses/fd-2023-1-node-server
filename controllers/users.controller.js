const users = [];

module.exports.createUser = async (req, res) => {
  /*
    1. распарсить JSON данные
    2. проверить их на корректность
    3. сохранить нового юзера (при этом подкинуть ему id)
    3.5 ОПЦИОНАЛЬНО создать сессию
    4. Отправить данные на клиент
  */
  const { user } = req;

  user.id = Date.now();
  users.push(user);

  res.send(user);
};

module.exports.getUsers = async (req, res) => {
  res.send(users);
};
