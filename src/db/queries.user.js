const User = require('./models').User;
const bcrypt = require('bcryptjs');

module.exports = {
  createUser(newUser, callback) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);
    console.log('hashed', hashedPassword)
    return User.create({
      email: newUser.email,
      name: newUser.name,
      hashedPassword: hashedPassword
    })
    .then((user) => {
      callback(null, user)
    })
    .catch((err) => {
      callback(err);
    })
  }
}
